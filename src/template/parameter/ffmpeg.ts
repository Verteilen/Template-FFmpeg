import { ParameterContainer, DataType } from "../../interface"

export const GetExample_FFmpegProject_Parameter_Builder = ():ParameterContainer[] => {
    return [
        { name: "src", value: "/home/user/videos/source.mp4", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "output", value: "/home/user/videos/output.mp4", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "start", value: "00:00:00", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "end", value: "00:00:05", type: DataType.String, runtimeOnly: false, hidden: false },
    ]
}