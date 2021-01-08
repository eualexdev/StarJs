class Animated{
    public name;id;duration;repeat;delay;mode
    public constructor(id, name, duration=2000, repeat=1, delay=0, mode="forwards", style){
        if (id == "" || id == null || id == undefined || name == "" || name == null || name == undefined){
            CaptureException("NOTFOUND","new Animated()","id or name")
        } else {
            this.id = id
            this.name = name
            this.duration = duration
            this.repeat = repeat
            this.delay = delay
            this.mode = mode
        }
    }
}