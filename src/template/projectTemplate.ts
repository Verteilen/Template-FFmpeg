import { Project, TemplateGroup, TemplateGroup2 } from '../interface'
import { GetFUNIQUE_GS4Project_Parameter_Builder } from './parameter/ffmpeg'
import { GetFUNIQUE_GS4ProjectTemplate_BlendPrepare } from './project/GS4/GenerateBlendPrepare'
import { GetFUNIQUE_GS4ProjectTemplate_BlendResult } from './project/GS4/GenerateBlendResult'
import { GetFUNIQUE_GS4ProjectTemplate_Colmap } from './project/GS4/GenerateColmap'
import { GetFUNIQUE_GS4ProjectTemplate_Generate_IFrame } from './project/GS4/GenerateIFrame'
import { GetFUNIQUE_GS4ProjectTemplate_Mask } from './project/GS4/GenerateMaskedPictures'
import { GetFUNIQUE_GS4ProjectTemplate_Generate_Prepare } from './project/GS4/GeneratePrepare'
import { GetFUNIQUE_GS4ProjectTemplate_Full } from './project/GS4/GS4D_Full'
import { GetFUNIQUE_GS4ProjectTemplate_PLYOutput } from './project/GS4/OutputPly'
import { GetFUNIQUE_GS4ProjectTemplate_LUT } from './project/GS4/PlyLutConvert'

export * from './project/GS4/GenerateBlendPrepare'
export * from './project/GS4/GenerateBlendResult'
export * from './project/GS4/GenerateColmap'
export * from './project/GS4/GenerateIFrame'
export * from './project/GS4/GeneratePrepare'
export * from './project/GS4/OutputPly'
export * from './project/GS4/PlyLutConvert'

export const ProjectTempGroup:Array<TemplateGroup> = [
    { group: "GS4D", value: 100, template: GetFUNIQUE_GS4ProjectTemplate_Full },
    { group: "GS4D", value: 101, template: GetFUNIQUE_GS4ProjectTemplate_Generate_Prepare },
    { group: "GS4D", value: 102, template: GetFUNIQUE_GS4ProjectTemplate_Colmap },
    { group: "GS4D", value: 103, template: GetFUNIQUE_GS4ProjectTemplate_Generate_IFrame },
    { group: "GS4D", value: 104, template: GetFUNIQUE_GS4ProjectTemplate_BlendPrepare },
    { group: "GS4D", value: 105, template: GetFUNIQUE_GS4ProjectTemplate_BlendResult },
    { group: "GS4D", value: 106, template: GetFUNIQUE_GS4ProjectTemplate_PLYOutput },
    { group: "GS4D", value: 107, template: GetFUNIQUE_GS4ProjectTemplate_LUT },
    { group: "GS4D", value: 108, template: GetFUNIQUE_GS4ProjectTemplate_Mask },
]

export const ParameterTempGroup:Array<TemplateGroup2> = [
    { group: "GS4D", title: "GS4 共用數據庫", value: 100, template: GetFUNIQUE_GS4Project_Parameter_Builder },
]