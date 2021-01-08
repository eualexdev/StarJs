var Get = (variable = "") => {
    if (variable == "" || variable == null || variable == undefined){
        CaptureException("NOTFOUND","Get","variable")
    } else {
        var p = document.URL.split("?").join("=")
        var p = p.split("&").join("=")
        var p = p.split("%20").join(" ")
        var url = p.split("=")
        for(var i in url){
            if(variable == url[i]){
                return url[Number(i)+1]
            }
        }
    }
}