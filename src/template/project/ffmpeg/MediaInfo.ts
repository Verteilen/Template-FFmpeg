import { v6 as uuidv6 } from 'uuid';
import { Task, Job, Project, Parameter } from '../../../interface';
import { JobCategory, JobType } from '../../../interface/enum';
import { GetFFmpegProject_Parameter } from '../../parameter/ffmpeg/FFmpeg';

const Info = ():Task => {
    const render:Job = {
        uuid: uuidv6(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        script: "",
        string_args: ["ffprobe", "ffprobe -v quiet -print_format json -show_format -show_streams %root%/%Info.src% > %root%/%Info.output%"],
        number_args: [],
        boolean_args: []
    }
    const t:Task = {
        uuid: uuidv6(),
        title: "Fetch info into json file",
        description: "",
        setupjob: false,
        cronjob: false,
        cronjobKey: "",
        multi: false,
        multiKey: "",
        properties: [],
        jobs: [
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Info = (r:Project):Project => {
    const para:Parameter = {
        title: "FFmpeg Parameter",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Parameter()
    }
    r.title = "Media Info"
    r.parameter = para
    r.task.push(...[
        Info(),
    ])
    return r
}