/////////////////////////////////////
///////////// Star Js ///////////////
/////////////////////////////////////
/////////// V - 1.0.0 ///////////////
/////////////////////////////////////
/////////////  Moto  ////////////////
/////////////////////////////////////




/////////////
// Variables
////////////
var count:number = 0;
let not = "not"
////////////


function Write(value:any = ""){
    if (count == 0){ console.log("the front tag was not opened.") }

    if (value != "" && value != undefined && value != null){
        //Write in Document
        document.write(value)
        return value
    } else {
        return CaptureException("NOTFOUND","Write()","value")
    }
}

function WriteLn(value:any = ""){
    if (count == 0){ console.log("the front tag was not opened.") }

    if (value != "" && value != undefined && value != null){
        //Write in Document
        document.writeln(value)
        return value
    } else {
        return CaptureException("NOTFOUND","Write()","value")
    }
}

class Front{
    private version:string = "1-0-2"
    public constructor(){
        document.writeln("<header class='using-star' id='starjs'>")
        document.writeln(`<div class= 'star-js' id='${this.version}'>`)
        count += 1
        console.log("V: "+this.version)

    }
}

class End{
    public constructor(){
        if (count > 0){
            document.writeln("</header>")
            document.writeln("</div>")
            count -= 1
        } else {
            CaptureException("FRONTNOT","End()")
        }
    }
}


