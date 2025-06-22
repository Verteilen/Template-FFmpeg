import { Parameter, ParameterContainer, Project } from "./base"

type ProjectCall = (p:Project) => Project
type ParameterCall = () => Array<ParameterContainer>

export interface TemplateGroup {
    value: number
    group: string
    title?: string
    template: ProjectCall
}

export interface TemplateGroup2 {
    value: number
    group: string
    title?: string
    template: ParameterCall
}

export interface PluginContent {
    filename: string
    url: string
    platform: NodeJS.Platform
    arch: NodeJS.Architecture
}

export interface Plugin {
    name: string
    description: string
    version?: string
    contents: Array<PluginContent>
}

export interface PluginList {
    plugins: Array<Plugin>
}

export interface PluginState {
    name: string
    url: string
    installed: boolean
    supported: boolean
}

export interface PluginPageData {
    plugins: Array<Plugin>
    project: Array<TemplateGroup>
    parameter: Array<TemplateGroup2>
}

export interface TemplateDataProject {
    title: string
    filename: string
    group: string
}

export interface TemplateDataParameter {
    title: string
    filename: string
    group: string
}

export interface TemplateData {
    projects: Array<TemplateDataProject>
    parameters: Array<TemplateDataParameter>
}