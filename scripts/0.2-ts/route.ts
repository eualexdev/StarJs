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

class Route{
    public routeName:string="";
    public calbackFunc:any;
    public constructor(){}
    public define(route="",calback){
        if (
            route == "" || route == null || route == undefined ||
            calback == "" || calback == null || calback == undefined
        ){
            CaptureException("NOTFOUND","Route.define()","route or calback")
        } else {
            if (isRoute(route)){
                this.routeName = route
                this.calbackFunc = calback
                calback()
            }
        }
    }

    public isAcessed(){
        let route = this.routeName
        if (route == "" || route == null || route == undefined){
            CaptureException("NOTFOUND","","route")
        } else {
            if (document.URL.search(route) > 0){
                return true
            } else {
                return false
            }
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
