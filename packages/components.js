/////////////////////////////////////
///////////// Star Js ///////////////
/////////////////////////////////////
/////////// V - 1.0.0 ///////////////
/////////////////////////////////////
/////////// Componensts /////////////
/////////////////////////////////////
var usings = new /** @class */ (function () {
    function Usings() {
        this.use_html = 0;
        this.use_head = 0;
        this.use_body = 0;
        this.use_div = 0;
        this.use_nav = 0;
        this.use_header = 0;
        this.use_section = 0;
        this.use_footer = 0;
        this.use_article = 0;
        this.use_form = 0;
        // Users for OutComponents
        this.use_Template = 0;
        this.use_View = 0;
    }
    return Usings;
}());
function Commands(commands) {
    var text = String("");
    var selecters = Object.keys(commands);
    for (var n in selecters) {
        text += selecters[n] + "=" + '"' + commands[selecters[n]] + '"' + " ";
    }
    return text;
}
var Html;
(function (Html) {
    var Components = /** @class */ (function () {
        function Components() {
            this.components = this;
            this.html = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<html " + Commands(commands) + " >");
                    usings.use_html += 1;
                },
                end: function () {
                    if (usings.use_html > 0) {
                        document.writeln("</html>");
                        usings.use_html -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "html.end()");
                    }
                }
            };
            this.head = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<head " + Commands(commands) + " >");
                    usings.use_head += 1;
                },
                end: function () {
                    if (usings.use_html > 0) {
                        document.writeln("</head>");
                        usings.use_head -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "head.end()");
                    }
                }
            };
            this.body = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<body " + Commands(commands) + ">");
                    usings.use_body += 1;
                },
                end: function () {
                    if (usings.use_body > 0) {
                        document.writeln("</body>");
                        usings.use_body -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "body.end()");
                    }
                }
            };
            this.div = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<div " + Commands(commands) + " >");
                    usings.use_div += 1;
                },
                end: function () {
                    if (usings.use_div > 0) {
                        document.writeln("</div>");
                        usings.use_div -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "div.end()");
                    }
                }
            };
            this.nav = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<nav " + Commands(commands) + " >");
                    usings.use_nav += 1;
                },
                end: function () {
                    if (usings.use_nav > 0) {
                        document.writeln("</nav>");
                        usings.use_nav -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "nav.end()");
                    }
                }
            };
            this.header = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<header " + Commands(commands) + " >");
                    usings.use_header += 1;
                },
                end: function () {
                    if (usings.use_header > 0) {
                        document.writeln("</header>");
                        usings.use_header -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "header.end()");
                    }
                }
            };
            this.section = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<section " + Commands(commands) + " >");
                    usings.use_section += 1;
                },
                end: function () {
                    if (usings.use_section > 0) {
                        document.writeln("</section>");
                        usings.use_section -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "section.end()");
                    }
                }
            };
            this.footer = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<footer " + Commands(commands) + " >");
                    usings.use_footer += 1;
                },
                end: function () {
                    if (usings.use_footer > 0) {
                        document.writeln("</footer>");
                        usings.use_footer -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "footer.end()");
                    }
                }
            };
            this.article = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<article " + Commands(commands) + " >");
                    usings.use_article += 1;
                },
                end: function () {
                    if (usings.use_article > 0) {
                        document.writeln("</article>");
                        usings.use_article -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "article.end()");
                    }
                }
            };
            this.form = {
                then: function (commands) {
                    if (commands === void 0) { commands = {}; }
                    document.writeln("<form " + Commands(commands) + " >");
                    usings.use_form += 1;
                },
                end: function () {
                    if (usings.use_form > 0) {
                        document.writeln("</form>");
                        usings.use_form -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "form.end()");
                    }
                }
            };
        }
        // To functions
        Components.prototype.title = function (values) {
            if (values === void 0) { values = document.URL; }
            document.writeln("<title>" + values + "</title>");
        };
        Components.prototype.meta = function (values) {
            if (values === void 0) { values = 'charset="UTF-8"'; }
            document.writeln("<meta " + values + ">");
        };
        Components.prototype.h1 = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<h1 " + Commands(commands) + ">" + values + "</h1>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "h1()", "values");
            }
        };
        Components.prototype.h2 = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<h2 " + Commands(commands) + ">" + values + "</h2>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "h2()", "values");
            }
        };
        Components.prototype.h3 = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<h3 " + Commands(commands) + ">" + values + "</h3>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "h3()", "values");
            }
        };
        Components.prototype.h4 = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<h4 " + Commands(commands) + ">" + values + "</h4>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "h1()", "values");
            }
        };
        Components.prototype.h5 = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<h5 " + Commands(commands) + ">" + values + "</h5>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "h5()", "values");
            }
        };
        Components.prototype.h6 = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<h6 " + Commands(commands) + ">" + values + "</h6>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "h6()", "values");
            }
        };
        Components.prototype.p = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<p " + Commands(commands) + ">" + values + "</a>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "p()", "values");
            }
        };
        Components.prototype.strong = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<strong " + Commands(commands) + ">" + values + "</strong>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "strong()", "values");
            }
        };
        Components.prototype.em = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<em " + Commands(commands) + ">" + values + "</em>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "em()", "values");
            }
        };
        Components.prototype.br = function () {
            document.writeln("<br>");
        };
        Components.prototype.hr = function () {
            document.writeln("<hr>");
        };
        Components.prototype.a = function (values, href, commands) {
            if (values === void 0) { values = ""; }
            if (href === void 0) { href = "#"; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<a href=" + href + " " + Commands(commands) + ">" + values + "</a>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "a()", "values");
            }
        };
        Components.prototype.button = function (values, commands) {
            if (values === void 0) { values = ""; }
            if (commands === void 0) { commands = {}; }
            if (values != "" && values != null && values != undefined) {
                document.writeln("<button " + Commands(commands) + ">" + values + "</button>");
                return values;
            }
            else {
                CaptureException("NOTFOUND", "button()", "values");
            }
        };
        Components.prototype.input = function (type, commands) {
            if (type === void 0) { type = ""; }
            if (commands === void 0) { commands = {}; }
            if (type != "" && type != null && type != undefined) {
                document.writeln("<input type='" + type + "' " + Commands(commands) + " >");
                // No return
            }
            else {
                CaptureException("NOTFOUND", "input()", "type");
            }
        };
        return Components;
    }());
    Html.Components = Components;
})(Html || (Html = {}));
