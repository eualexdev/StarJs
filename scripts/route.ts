const isRoute = (route="") => {
    if (route == "" || route == null || route == undefined){
        CaptureException("NOTFOUND","isRoute","route")
    } else {
        if (document.URL.search(route) > 0){
            return true
        } else {
            return false
        }
    }
}
const isLocation = (route="") => {
    if (route == "" || route == null || route == undefined){
        CaptureException("NOTFOUND","isLocation","route")
    } else {
        if (document.URL.search(route) > 0){
            return true
        } else {
            return false
        }
    }
}

const setRoute = (route="",calback) => {
    if (
        route == "" || route == null || route == undefined ||
        calback == "" || calback == null || calback == undefined
    ){
        CaptureException("NOTFOUND","Route","route or calback")
    } else {
        if (isRoute(route)){
            calback()
        }
    }
}

const moveRoute = (route="") => {
    if (
        route == "" || route == null || route == undefined 
    ){
        CaptureException("NOTFOUND","moveRoute","route")
    } else {
        location.assign(route)
    }
}

const moveLocation = (route="") => {
    if (
        route == "" || route == null || route == undefined 
    ){
        CaptureException("NOTFOUND","moveLocation","route")
    } else {
        location.assign(route)
    }
}
