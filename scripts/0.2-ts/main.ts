/////////////////////////////////////
///////////// Star Js ///////////////
/////////////////////////////////////
/////////// V - 1.0.0 ///////////////
/////////////////////////////////////
/////////////  Moto  ////////////////
/////////////////////////////////////


function Write(value:any = ""){
    if (value != "" && value != undefined && value != null){
        //Write in Document
        document.write(value)
        return value
    } else {
        return CaptureException("NOTFOUND","Write()","value")
    }
}

function WriteLn(value:any = ""){
    if (value != "" && value != undefined && value != null){
        //Write in Document
        document.writeln(value)
        return value
    } else {
        return CaptureException("NOTFOUND","Write()","value")
    }
}
