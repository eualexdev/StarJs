var Application = {
    width: screen.width,
    height: screen.height,
    url: document.URL,
    title: document.title,
    MainPageFunction: function (calback) {
        try {
            window.onload = function () { return calback(); };
        }
        catch (error) {
            CaptureException("MAINERROR", "Application.MainFunction()");
            // Talvez Muda o Nome da exceção
        }
    },
    MainPageClass: function (calback) {
        try {
            window.onload = function () { return new calback(); };
        }
        catch (error) {
            CaptureException("MAINERROR", "Application.MainClass()");
        }
    }
};
