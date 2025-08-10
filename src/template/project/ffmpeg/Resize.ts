import { v6 as uuidv6 } from 'uuid';
import { Task, Job, Project, Parameter } from '../../../interface';
import { JobCategory, JobType } from '../../../interface/enum';
import { GetFFmpegProject_Parameter } from '../../parameter/ffmpeg/FFmpeg';

const resize = ():Task => {
    const render:Job = {
        uuid: uuidv6(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        script: "",
        string_args: ["ffmpeg", "-hide_banner -y -i %root%/%resize.src% -crf %crf% -vf scale=%resize.width%:%resize.height% -c:v %video_encode% -c:a copy %root%/%resize.output%"],
        number_args: [],
        boolean_args: []
    }
    const t:Task = {
        uuid: uuidv6(),
        title: "Resize a media",
        description: "",
        setupjob: false,
        cronjob: true,
        cronjobKey: "frameCount",
        multi: false,
        multiKey: "",
        properties: [],
        jobs: [
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Resize = (r:Project):Project => {
    const para:Parameter = {
        title: "FFmpeg Parameter",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Parameter()
    }
    r.title = "Media Resize"
    r.parameter = para
    r.task.push(...[
        resize(),
    ])
    return r
}