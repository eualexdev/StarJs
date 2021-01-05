/////////////////////////////////////
///////////// Star Js ///////////////
/////////////////////////////////////
/////////// V - 1.0.0 ///////////////
/////////////////////////////////////
//////////  Exception  /////////////
/////////////////////////////////////
var value_exp = 0;
var SendException = /** @class */ (function () {
    function SendException(message) {
        if (message === void 0) { message = ""; }
        if (message != "" && message != undefined && message != null) {
            document.write(this.Send(message));
        }
        else {
            CaptureException("NOTFOUND", "new SendException(" + message + ")", 'message');
        }
    }
    SendException.prototype.Send = function (send) {
        return "<h1 style='background-color:yellow;border-radius:5px;text-align:center;'>" + send + "</h1>";
    };
    return SendException;
}());
function CaptureException(type, key, param) {
    if (type === void 0) { type = "NOTFOUND"; }
    if (key === void 0) { key = "CaptureException()"; }
    if (param === void 0) { param = "type or key or param"; }
    if (type == "NOTFOUND") {
        value_exp += 1;
        if (value_exp == 1) {
            new SendException("And there Friend you forgot to pass a parameter\n" + ("Error In the code stretch: <em>\"" + key + "\"</em>\nin the parameters: <em>" + param + "</em>\n " + value_exp + " Error"));
        }
        else if (value_exp > 1) {
            new SendException("And there Friend you forgot to pass a parameter\n" + ("Error In the code stretch: <em>\"" + key + "\"</em>\nin the parameters: <em>" + param + "</em>\n " + value_exp + " Errors"));
        }
    }
    else if (type == "FRONTNOT") {
        value_exp += 1;
        if (value_exp == 1) {
            new SendException("Hey buddy to close the front tag initialization with end, the front tag must be open.\n" + (" Error In the code stretch: <em>\"" + key + "\"</em> \n " + value_exp + " Error"));
        }
        else if (value_exp > 1) {
            new SendException("Hey buddy to close the front tag initialization with end, the front tag must be open.\n" + (" Error In the code stretch: <em>\"" + key + "\"</em> \n " + value_exp + " Errors"));
        }
    }
    else if (type == "OPENNOT") {
        value_exp += 1;
        if (value_exp == 1) {
            new SendException("Hey buddy to close tag initialization with end, the tag must be open.\n" + (" Error In the code stretch: <em>\"" + key + "\"</em> \n " + value_exp + " Error"));
        }
        else if (value_exp > 1) {
            new SendException("Hey buddy to close tag initialization with end, the tag must be open.\n" + (" Error In the code stretch: <em>\"" + key + "\"</em> \n " + value_exp + " Errors"));
        }
    }
    else if (type == "MAINERROR") {
        value_exp += 1;
        if (value_exp == 1) {
            new SendException("Ei Amigo Amigo Você tem que passa um calback de acordo com a tipo de calback pedido." + (" Error In the code stretch: <em>\"" + key + "\"</em> \n " + value_exp + " Error"));
        }
        else if (value_exp > 1) {
            new SendException("Ei Amigo Amigo Você tem que passa um calback de acordo com a tipo de calback pedido." + (" Error In the code stretch: <em>\"" + key + "\"</em> \n " + value_exp + " Errors"));
        }
    }
}
