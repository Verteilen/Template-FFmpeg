import * as fs from 'fs'
import * as path from 'path'
import { Project, TemplateData } from './interface'
import { ParameterTempGroup, ProjectTempGroup } from './template/projectTemplate'

const main = () => {
    if(!fs.existsSync(path.join(__dirname, '../dist'))){
        fs.mkdirSync(path.join(__dirname, '../dist'))
    }

    const k:TemplateData = {
        projects: [],
        parameters: []
    }

    ProjectTempGroup.forEach(item => {
        const p:Project = {
            uuid: "",
            title: "",
            description: "",
            parameter_uuid: "",
            task: []
        }
        const result = item.template(p)
        k.projects.push({
            filename: item.template.name,
            title: item.title ? item.title : result.title,
            group: item.group,
        })
        fs.writeFileSync(path.join(__dirname, '../dist', `${item.template.name}.json`), 
            JSON.stringify(result, null, 4), 'utf-8')
    })

    ParameterTempGroup.forEach(item => {
        const result = item.template()
        k.parameters.push({
            filename: item.template.name,
            title: item.title!,
            group: item.group,
        })
        fs.writeFileSync(path.join(__dirname, '../dist', `${item.template.name}.json`), 
            JSON.stringify(result, null, 4), 'utf-8')
    })
    fs.writeFileSync(path.join(__dirname, '../dist', `template.json`), 
            JSON.stringify(k, null, 4), 'utf-8')
}

main()