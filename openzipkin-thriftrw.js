"use strict"

var
  fs= require( "fs"),
  path= require( "path"),
  Thrift= require( "thriftrw").Thrift,
  thrift

function compile(file){
	var
	  fullpath= path.join( __dirname, "thrift", file+ ".thrift"),
	  source= fs.readFileSync( fullpath, "utf8")
	if( !thrift){
		thrift= new Thrift({
			source: source,
			strict: false
		})
	}else{
		thrift.compile( source, file)
		thrift.link()
	}
	return thrift
}

var
  files= ["scribe", "zipkinDependencies", "zipkinCore"]
files.forEach( function(file){
	console.log(file)
	compile( file)
})

module.exports= thrift
