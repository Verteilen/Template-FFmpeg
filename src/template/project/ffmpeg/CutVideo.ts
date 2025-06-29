import { v6 as uuidv6 } from 'uuid';
import { Job, JobCategory, JobType, Parameter, Project, Task } from '../../../interface';
import { GetExample_FFmpegProject_Parameter_Builder } from '../../parameter/ffmpeg';

export const CutVideo = ():Task => {
    const copyhelper:Job = {
        uuid: uuidv6(),
        category: JobCategory.Execution,
        type: JobType.COMMAND,
        script: "",
        string_args: ["", "ffmpeg", "-hide_banner -ss %start% -to %end% -i %src% -c:v %encode% %output%"],
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

export const GetFFmpeg_ProjectTemplate_CutVideo = (r:Project):Project => {
    const para:Parameter = {
        title: "Cut Video",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetExample_FFmpegProject_Parameter_Builder()
    }
    r.title = "FFmpeg Cut Video"
    r.parameter = para
    r.task.push(...[
        CutVideo()
    ])
    return r
}