var
  fs= require( "fs"),
  path= require( "path"),
  Thrift= require( "thriftrw").Thrift

function fetch(file){
	var
	  fullpath= path.join( __dirname, "thrift", file+ ".thrift"),
	  source= fs.readFileSync( fullpath, "utf8")
	return source
}

var
  files= ["scribe", "zipkinCollector", "zipkinCore", "zipkinDependencies", "zipkinQuery"]
  fetch= files.map( fetch),
  content= fetch.join("")

console.log(content)

module.exports= new Thrift({
	source: content
})

