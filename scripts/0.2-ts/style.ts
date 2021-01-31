class StyleSheets { 
    public constructor(calback){
        if (calback != null && calback != "" && calback != undefined){
            document.writeln("<style>")
            document.writeln(StyleSheets.transform(calback()))
            document.writeln("</style>")
        
        } else {
            CaptureException("NOTFOUND","StyleSheets()","calback")
        }
    }

    public static render(css){
        if (css != null && css != "" && css != undefined){
            document.writeln("<style>")
            document.writeln(StyleSheets.transform(css))
            document.writeln("</style>")
            return css
        } else {
            CaptureException("NOTFOUND","StyleSheets.render()","css")
        }
    }

    public static transform (code_json) {
        const selecters = Object.keys(code_json)
        return selecters.map((selector) => {
            const definition = code_json[selector]
            const reals = Object.keys(definition)
            var code_css = reals.map((rule) => {
            return `${rule}:${definition[rule]}`}).join(';')
        
            selector = selector.replace("____","*")
            selector = selector.replace("___","#")
            selector = selector.replace("__",".")
            selector = selector.replace("_","-")
            
            code_css = code_css.split('_').join('-')
            code_css = code_css.split(',').join(' ')


            return `${selector}{${code_css};}`}).join('\n')
    } // Qualquer erro é so tira a ; do lado code_css};
    // se da errado remove .replace

}

