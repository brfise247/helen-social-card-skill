// 抠出照片里的主体，输出透明底 PNG；英博伦品牌卡不使用人物贴纸，仅其它合成场景备用。
// 用的是 macOS Vision 的 VNGenerateForegroundInstanceMaskRequest，
// 和 iPhone「长按抠图」是同一套技术。需要 macOS 14+。
//
//   swift scripts/lift-subject.swift <输入图> <输出.png>
//
// 已经是透明底的 iPhone 抠图 PNG 不用再跑。模切白边不在这里做：
// 英博伦品牌卡不做模切贴纸；其它合成场景的白边请在任务自己的 HTML/CSS 里处理。
import Vision
import CoreImage
import Foundation

let args = CommandLine.arguments
guard args.count == 3 else {
    FileHandle.standardError.write("用法: swift lift-subject.swift <输入图> <输出.png>\n".data(using: .utf8)!)
    exit(2)
}
guard let input = CIImage(contentsOf: URL(fileURLWithPath: args[1])) else {
    FileHandle.standardError.write("读不了输入图: \(args[1])\n".data(using: .utf8)!)
    exit(1)
}
let request = VNGenerateForegroundInstanceMaskRequest()
let handler = VNImageRequestHandler(ciImage: input)
try handler.perform([request])
guard let result = request.results?.first else {
    FileHandle.standardError.write("没找到主体\n".data(using: .utf8)!)
    exit(1)
}
let buffer = try result.generateMaskedImage(ofInstances: result.allInstances, from: handler, croppedToInstancesExtent: true)
try CIContext().writePNGRepresentation(of: CIImage(cvPixelBuffer: buffer),
                                       to: URL(fileURLWithPath: args[2]),
                                       format: .RGBA8,
                                       colorSpace: CGColorSpaceCreateDeviceRGB())
print("OK \(args[2])")
