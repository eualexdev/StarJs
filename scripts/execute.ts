namespace Script{
    export var run = (arq) => {
        if (arq != "" || arq != undefined || arq != null)
        {
            fetch (arq)
            .then((data) => {return data.text()})
            .catch((err) => {console.log("This is a Erro ->",err)})
            .then((datacode) => {eval(String(datacode))})
            .catch((err) => {console.log("This is a Erro ->",err)})
        } else {
            CaptureException("NOTFOUND","Script.run()","arq")
        }
    }
}