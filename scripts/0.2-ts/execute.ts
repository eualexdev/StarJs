namespace Script{
    export var load = (arq) => {
        if (arq != "" || arq != undefined || arq != null)
        {
            fetch (arq)
            .then((data) => {return data.text()})
            .catch((err) => {console.log("This is a Erro ->",err)})
            .then((datacode) => {eval(String(datacode))})
            .catch((err) => {console.log("This is a Erro ->",err)})
        } else {
            CaptureException("NOTFOUND","Script.load()","arq")
        }
    }

    export var run = (code) => {
        if (code != "" || code != undefined || code != null)
        {
            eval(code)
        } else {
            CaptureException("NOTFOUND","Script.run()","code")
        }
    }
}

namespace Style{
    export function load(arq){
        if (arq != "" || arq != undefined || arq != null)
        {
            fetch (arq)
            .then((data) => {return data.text()})
            .catch((err) => {console.log("This is a Erro ->",err)})
            .then((datacode) => {
                document.writeln(`
<style>
${datacode}
</style>
`)
            })
            .catch((err) => {console.log("This is a Erro ->",err)})
        } else {
            CaptureException("NOTFOUND","Style.load()","arq")
        }
    }

    export var run = (code) => {
        if (code != "" || code != undefined || code != null)
        {
            document.writeln(`
<style>
${code}
</style>
`)
        } else {
            CaptureException("NOTFOUND","Style.run()","code")
        }
    }
}