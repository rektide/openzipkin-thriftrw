var
  fs= require( "fs"),
  path= require( "path"),
  Thrift= require( "thriftrw").Thrift

function make(file){
	console.log( file)
	var
	  fullpath= path.join( __dirname, "thrift", file+ ".thrift"),
	  source= fs.readFileSync( fullpath, "utf8"),
	  thrift= new Thrift({
		source: source,
		strict: false
	  })
	return thrift
}

var
  files= ["scribe", "zipkinDependencies", "zipkinCore", "zipkinCollector", "zipkinQuery"]

files.forEach( function(file){
	try {
		module.exports[ file]= make( file)
	}catch(ex){
		console.error( "Failed to build '"+ file+ "':", ex)
	}
})
