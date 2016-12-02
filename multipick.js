"use strict"

var isstring= require( "is-string")

function multipick( path, ...objects){
	for( var i in objects){
		var
		  object= objects[ i],
		  value= _check( path, object)
		if( value!== undefined&& value!== null){
			return value
		}
	}
}

function _check( path, object){
	if( object=== undefined|| object=== null){
		return
	}else if( isstring( path)){
		return object[ path]
	}else{
		var value= object
		for(var i in path){
			if( value=== undefined|| value=== null){
				break
			}
			value= value[ path[ i]]
		}
		return value
	}
}

module.exports= multipick
module.exports.multipick= multipick
