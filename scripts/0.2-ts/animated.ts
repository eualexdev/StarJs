class Animated{
    public elemet:any
        name:any
        time:string = "1s"
        delay:string = "unset"
        mode:string = "none"
        count:string = "1"
        
        command:string = "not defined"
        
    public constructor(elemet='',name=""){
        if (name!= "" && name != undefined && name != null ||
          elemet!= "" && elemet != undefined && elemet != null){  
            this.elemet = elemet
            this.name = name
        } else {
            CaptureException("NOTFOUND",`new Animated()`,'element or name')
        }
    }

    public setTime(time:""){
        if (time != "" && time != undefined && time!= null) {  
            this.time = time
        } else {
            CaptureException("NOTFOUND",`Animated.setTime()`,'time')
        }
    }
    public setDelay(delay:""){
        if (delay != "" && delay != undefined && delay!= null) {  
            this.delay = delay
        } else {
            CaptureException("NOTFOUND",`Animated.setDelay()`,'delay')
        }
    }
    public setMode(mode:""){
        if (mode != "" && mode != undefined && mode!= null) {  
            this.mode = mode
        } else {
            CaptureException("NOTFOUND",`Animated.setMode()`,'mode')
        }
    }
    public setCount(count:""){
        if (count != "" && count != undefined && count!= null) {  
            this.count = count
        } else {
            CaptureException("NOTFOUND",`Animated.setCount()`,'count')
        }
    }
    public setFunc(func:{}){
        if (func != "" && func != undefined && func!= null) {  
            this.command = StyleSheets.transform(func)
        } else {
            CaptureException("NOTFOUND",`Animated.setFunc()`,'func')
        }
    }
    // fazer os outros objetos de animação
    

    public  run(){
        var code = ""
        code +=
`
${this.elemet}{
    animation-name:${this.name};
    animation-duration:${this.time};
    animation-delay:${this.delay};
    animation-fill-mode:${this.mode};
    animation-iteration-count:${this.count};
}

@keyframes ${this.name}{
${this.command}
}
`   
        return code
    }
}