import { v6 as uuidv6 } from 'uuid';
import { Task, Job, Project, Parameter } from '../../../interface';
import { JobCategory, JobType } from '../../../interface/enum';
import { GetFFmpegProject_Parameter } from '../../parameter/ffmpeg/FFmpeg';

const Convert = ():Task => {
    const mkdir:Job = {
        uuid: uuidv6(),
        category: JobCategory.Execution,
        type: JobType.CREATE_DIR,
        script: "",
        string_args: ["%root%/%Video2I.folder%/%Video2I.folder%"],
        number_args: [],
        boolean_args: []
    }
    const render:Job = {
        uuid: uuidv6(),
        category: JobCategory.Execution,
        type: JobType.LIB_COMMAND,
        script: "",
        string_args: ["ffmpeg", "-hide_banner -y -i %root%/%Video2I.src% "+
            "-vf fps=%Video2I.fps% %root%/%Video2I.folder%/%Video2I.output%"],
        number_args: [],
        boolean_args: []
    }
    const t:Task = {
        uuid: uuidv6(),
        title: "Video to Images",
        description: "",
        setupjob: false,
        cronjob: false,
        cronjobKey: "",
        multi: false,
        multiKey: "",
        properties: [],
        jobs: [
            mkdir,
            render
        ]
    }
    return t
}

export const GetFFmpeg_ProjectTemplate_Video2Image = (r:Project):Project => {
    const para:Parameter = {
        title: "FFmpeg Parameter",
        uuid: uuidv6(),
        canWrite: true,
        containers: GetFFmpegProject_Parameter()
    }
    r.title = "Video to Images"
    r.parameter = para
    r.task.push(...[
        Convert(),
    ])
    return r
}