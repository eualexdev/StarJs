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
var count = 0;
var not = "not";
////////////
function Write(value) {
    if (value === void 0) { value = ""; }
    if (count == 0) {
        console.log("the front tag was not opened.");
    }
    if (value != "" && value != undefined && value != null) {
        //Write in Document
        document.write(value);
        return value;
    }
    else {
        return CaptureException("NOTFOUND", "Write()", "value");
    }
}
function WriteLn(value) {
    if (value === void 0) { value = ""; }
    if (count == 0) {
        console.log("the front tag was not opened.");
    }
    if (value != "" && value != undefined && value != null) {
        //Write in Document
        document.writeln(value);
        return value;
    }
    else {
        return CaptureException("NOTFOUND", "Write()", "value");
    }
}
var Front = /** @class */ (function () {
    function Front() {
        this.version = "1-0-2";
        document.writeln("<header class='using-star' id='starjs'>");
        document.writeln("<div class= 'star-js' id='" + this.version + "'>");
        count += 1;
        console.log("V: " + this.version);
    }
    return Front;
}());
var End = /** @class */ (function () {
    function End() {
        if (count > 0) {
            document.writeln("</header>");
            document.writeln("</div>");
            count -= 1;
        }
        else {
            CaptureException("FRONTNOT", "End()");
        }
    }
    return End;
}());
