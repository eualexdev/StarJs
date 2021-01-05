const Application = {
    width:screen.width,
    height:screen.height,
    url:document.URL,
    title:document.title,
    MainPageFunction:(calback) => {
        try {
            window.onload  = () => calback()    
        } catch (error) {
            CaptureException("MAINERROR","Application.MainFunction()")
            // Talvez Muda o Nome da exceção

        }
    },
    MainPageClass:(calback) => {
        try {
            window.onload = () => new calback()    
        } catch (error) {
            CaptureException("MAINERROR","Application.MainClass()")
        }
    }
}