import { TemplateGroup, TemplateGroup2 } from '../interface'
import { GetExample_FFmpegProject_Parameter_Builder } from './parameter/ffmpeg'
import { GetFFmpeg_ProjectTemplate_CutVideo } from './project/ffmpeg/CutVideo'
import { GetFFmpeg_ProjectTemplate_GreenScreen } from './project/ffmpeg/GreenScreen'

export const ProjectTempGroup:Array<TemplateGroup> = [
    { group: "FFmpeg", value: 100, template: GetFFmpeg_ProjectTemplate_CutVideo },
    { group: "FFmpeg", value: 101, template: GetFFmpeg_ProjectTemplate_GreenScreen },
]

export const ParameterTempGroup:Array<TemplateGroup2> = [
    { group: "FFmpeg", title: "FFmpeg Share Data", value: 100, template: GetExample_FFmpegProject_Parameter_Builder },
]