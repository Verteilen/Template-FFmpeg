import { ParameterContainer, DataType } from "../../interface"

export const GetExample_FFmpegProject_Parameter_Builder = ():ParameterContainer[] => {
    return [
        { name: "src", value: "/home/user/videos/source.mp4", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "srcbase", value: "/home/user/videos/base.mp4", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "output", value: "/home/user/videos/output.mp4", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "encode", value: "h264", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "colorkey", value: "0x00FF00", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "similarity", value: 0.3, type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "blend", value: 0.2, type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "start", value: "00:00:00", type: DataType.String, runtimeOnly: false, hidden: false },
        { name: "end", value: "00:00:05", type: DataType.String, runtimeOnly: false, hidden: false },
    ]
}