import { v6 as uuidv6 } from 'uuid';
import { Job, JobCategory, JobType, Parameter, Project, Task } from '../../../interface';
import { GetExample_FFmpegProject_Parameter_Builder } from '../../parameter/ffmpeg';

export const GreenScreen = ():Task => {
    const copyhelper:Job = {
        uuid: uuidv6(),
        category: JobCategory.Execution,
        type: JobType.COMMAND,
        script: "",
        string_args: ["", "ffmpeg", "-hide_banner -i %srcbase% -i %src% -filter_complex \"[1:v]colorkey=%colorkey%:%similarity%:%blend%[ckout];[0:v]overlay[out]\" -map '[out]' -c:v %encode% %output%"],
        number_args: [],
        boolean_args: []
    }
    const t:Task = {
        uuid: uuidv6(),
        title: "FFmpeg Call",
        description: "",
        setupjob: false,
        cronjob: false,
        cronjobKey: "",
        multi: false,
        multiKey: "",
        properties: [],
        jobs: [
            copyhelper,
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_GreenScreen = (r:Project):Project => {
    const para:Parameter = {
        title: "GreenScreen",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetExample_FFmpegProject_Parameter_Builder()
    }
    r.title = "FFmpeg GreenScreen"
    r.parameter = para
    r.task.push(...[
        GreenScreen()
    ])
    return r
}