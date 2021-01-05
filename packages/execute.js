var Script;
(function (Script) {
    Script.run = function (arq) {
        if (arq != "" || arq != undefined || arq != null) {
            fetch(arq)
                .then(function (data) { return data.text(); })["catch"](function (err) { console.log("This is a Erro ->", err); })
                .then(function (datacode) { eval(String(datacode)); })["catch"](function (err) { console.log("This is a Erro ->", err); });
        }
        else {
            CaptureException("NOTFOUND", "Script.run()", "arq");
        }
    };
})(Script || (Script = {}));
