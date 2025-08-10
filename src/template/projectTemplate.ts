import { TemplateGroup, TemplateGroup2 } from '../interface'
import { GetFFmpegProject_Parameter } from './parameter/ffmpeg/FFmpeg'
import { GetFFmpeg_ProjectTemplate_Concat } from './project/ffmpeg/Concat'
import { GetFFmpeg_ProjectTemplate_Download } from './project/ffmpeg/Download'
import { GetFFmpeg_ProjectTemplate_Image2Video } from './project/ffmpeg/I2Video'
import { GetFFmpeg_ProjectTemplate_Info } from './project/ffmpeg/MediaInfo'
import { GetFFmpeg_ProjectTemplate_Resize } from './project/ffmpeg/Resize'
import { GetFFmpeg_ProjectTemplate_Transcode } from './project/ffmpeg/Transcode'
import { GetFFmpeg_ProjectTemplate_Video2Image } from './project/ffmpeg/V2Image'

export const ProjectTempGroup:Array<TemplateGroup> = [
    { group: "FFmpeg", value: 100, template: GetFFmpeg_ProjectTemplate_Concat },
    { group: "FFmpeg", value: 101, template: GetFFmpeg_ProjectTemplate_Download },
    { group: "FFmpeg", value: 102, template: GetFFmpeg_ProjectTemplate_Image2Video },
    { group: "FFmpeg", value: 103, template: GetFFmpeg_ProjectTemplate_Resize },
    { group: "FFmpeg", value: 104, template: GetFFmpeg_ProjectTemplate_Transcode },
    { group: "FFmpeg", value: 105, template: GetFFmpeg_ProjectTemplate_Video2Image },
    { group: "FFmpeg", value: 106, template: GetFFmpeg_ProjectTemplate_Info },
]

export const ParameterTempGroup:Array<TemplateGroup2> = [
    { group: "FFmpeg", title: "FFmpeg Share Data", value: 100, template: GetFFmpegProject_Parameter },
]