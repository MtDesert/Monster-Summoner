var argv=process.argv
if(argv.length!==4){
	console.log("命令行语法: nodejs解释器名 本文件名 枚举源文件名 目标代码文件名")
	console.log("枚举源文件名的格式:");
	console.log("枚举名A=枚举注释A\\n");
	console.log("枚举值Aa=枚举注释Aa\\n");
	console.log("枚举值Ab=枚举注释Ab\\n");
	console.log("......\\n");
	console.log("空行");
	console.log("枚举名B=枚举注释B\\n");
	console.log("枚举值Ba=枚举注释Ba\\n");
	console.log("枚举值Bb=枚举注释Bb\\n");
	console.log("......\\n");
	return
}
//分析参数
var commandName=argv[0];
var thisFilename=argv[1];
var inputFilename=argv[2];
var outputFilename=argv[3];

//启动文件系统打开文件
var fs=require("fs")
//var inputFile=fs.openSync(inputFilename,"r");
var outputFile=fs.openSync(outputFilename,"w");

var fileData=fs.readFileSync(inputFilename,"utf8");
var allLines=fileData.split("\n");

//输出过程
var nameCommentArray=[];
var outputEnum=function(){
	//开始输出注释
	for(var a=0;a<nameCommentArray.length;++a){
		var nameComment=nameCommentArray[a];
		if(a===0){//首行为枚举名
			fs.writeSync(outputFile,"/**"+nameComment[0]+" "+nameComment[1]+"\n")
		}else{
			fs.writeSync(outputFile,"@value "+nameComment[0]+" "+nameComment[1]+"\n")
		}
	}
	fs.writeSync(outputFile,"*/\n")
	//开始输出枚举值
	for(var a=0;a<nameCommentArray.length;++a){
		var nameComment=nameCommentArray[a];
		if(a===0){//首行为枚举名
			fs.writeSync(outputFile,"var "+nameComment[0]+"={\n")
		}else{
			fs.writeSync(outputFile,"\t"+nameComment[0]+":"+(a-1).toString()+",\n")
		}
	}
	fs.writeSync(outputFile,"}\n")
	//清理
	nameCommentArray.splice(0,nameCommentArray.length)
}

//逐行分析
for(var i=0;i<allLines.length;++i){
	var line=allLines[i];
	if(line.length===0){//枚举结束
		outputEnum();
	}else{
		var nameAndComment=line.split("=");//枚举名=注释
		if(nameAndComment.length===2){
			nameCommentArray.push(nameAndComment);
		}else{
			console.log((i+1).toString()+"行的等号数不为1");
		}
	}
}
//再检查
if(nameCommentArray.length>0)outputEnum()

//关闭文件
//fs.closeSync(inputFile);
fs.closeSync(outputFile);
