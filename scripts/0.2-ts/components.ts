/////////////////////////////////////
///////////// Star Js ///////////////
/////////////////////////////////////
/////////// V - 1.0.0 ///////////////
/////////////////////////////////////
/////////// Componensts /////////////
/////////////////////////////////////

// obs fazer o novo sitema de de return

const usings =  new class Usings{
    public use_html :number = 0
    public use_head :number = 0
    public use_body :number = 0
    public use_div :number = 0
    public use_nav :number = 0
    public use_header :number = 0
    public use_section :number = 0
    public use_footer :number = 0
    public use_article :number = 0
    public use_form :number = 0

    // Users for OutComponents
    public use_Template :number = 0
    public use_View :number = 0
    
    
    constructor (){

    }
}

function Commands(commands){
    var text = String("")
    const selecters = Object.keys(commands)
    for (var n in selecters){
        text +=  selecters[n] + "="  +'"' +commands[selecters[n]] +'"' + " "
    }
    return text
}

namespace Html {    
    export class Components{
        public components
        
        public html
        public head  
        public body   

        public div
        public nav
        public header
        public section
        public footer
        public article
        public form
        
        public constructor(){
            this.components = this
            
            this.html = {
                then: function (commands={}){
                    document.writeln(`<html ${Commands(commands)} >`)
                    usings.use_html += 1
                },
                end: function(){
                    if (usings.use_html > 0){
                        document.writeln("</html>")
                        usings.use_html -= 1
                    } else {
                        CaptureException("OPENNOT","html.end()")
                    }
                }

            }

            this.head = {
                then: function (commands={}){
                    document.writeln(`<head ${Commands(commands)} >`)
                    usings.use_head += 1
                },
                end: function(){
                    if (usings.use_html > 0){
                        document.writeln("</head>")
                        usings.use_head -= 1
                    } else {
                        CaptureException("OPENNOT","head.end()")
                    }
                }

            }

            this.body = {
                then: function (commands={}){
                    document.writeln(`<body ${Commands(commands)}>`)
                    usings.use_body += 1
                },
                end: function(){
                    if (usings.use_body > 0){
                        document.writeln("</body>")
                        usings.use_body -= 1
                    } else {
                        CaptureException("OPENNOT","body.end()")
                    }
                }

            }

            this.div = {
                then: function (commands={}){
                    document.writeln(`<div ${Commands(commands)} >`)
                    usings.use_div += 1
                },
                end: function(){
                    if (usings.use_div > 0){
                        document.writeln("</div>")
                        usings.use_div -= 1
                    } else {
                        CaptureException("OPENNOT","div.end()")
                    }
                }

            }
            this.nav = {
                then: function (commands={}){
                    document.writeln(`<nav ${Commands(commands)} >`)
                    usings.use_nav += 1
                },
                end: function(){
                    if (usings.use_nav > 0){
                        document.writeln("</nav>")
                        usings.use_nav -= 1
                    } else {
                        CaptureException("OPENNOT","nav.end()")
                    }
                }

            }

            this.header = {
                then: function (commands={}){
                    document.writeln(`<header ${Commands(commands)} >`)
                    usings.use_header += 1
                },
                end: function(){
                    if (usings.use_header > 0){
                        document.writeln("</header>")
                        usings.use_header -= 1
                    } else {
                        CaptureException("OPENNOT","header.end()")
                    }
                }

            }

            this.section = {
                then: function (commands={}){
                    document.writeln(`<section ${Commands(commands)} >`)
                    usings.use_section += 1
                },
                end: function(){
                    if (usings.use_section > 0){
                        document.writeln("</section>")
                        usings.use_section -= 1
                    } else {
                        CaptureException("OPENNOT","section.end()")
                    }
                }

            }
            
            this.footer = {
                then: function (commands={}){
                    document.writeln(`<footer ${Commands(commands)} >`)
                    usings.use_footer += 1
                },
                end: function(){
                    if (usings.use_footer > 0){
                        document.writeln("</footer>")
                        usings.use_footer -= 1
                    } else {
                        CaptureException("OPENNOT","footer.end()")
                    }
                }

            }
            
            this.article = {
                then: function (commands={}){
                    document.writeln(`<article ${Commands(commands)} >`)
                    usings.use_article += 1
                },
                end: function(){
                    if (usings.use_article > 0){
                        document.writeln("</article>")
                        usings.use_article -= 1
                    } else {
                        CaptureException("OPENNOT","article.end()")
                    }
                }

            }

            this.form = {
                then: function (commands={}){
                    document.writeln(`<form ${Commands(commands)} >`)
                    usings.use_form += 1
                },
                end: function(){
                    if (usings.use_form > 0){
                        document.writeln("</form>")
                        usings.use_form -= 1
                    } else {
                        CaptureException("OPENNOT","form.end()")
                    }
                }

            }

        }
  
        // To functions

        public title(values = document.URL){
            document.writeln(`<title>${values}</title>`)
            
        }
         
        public meta(commands = {charset:"UTF-8"}){
            document.writeln(`<meta ${Commands(commands)}>`)
            
        }

        public h1(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<h1 ${Commands(commands)}>${values}</h1>`)
                return values
            } else {
                CaptureException("NOTFOUND","h1()","values")
            }
        }

        public h2(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<h2 ${Commands(commands)}>${values}</h2>`)
                return values
            } else {
                CaptureException("NOTFOUND","h2()","values")
            }
        }

        public h3(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<h3 ${Commands(commands)}>${values}</h3>`)
                return values
            } else {
                CaptureException("NOTFOUND","h3()","values")
            }
        }
        
        public h4(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<h4 ${Commands(commands)}>${values}</h4>`)
                return values
            } else {
                CaptureException("NOTFOUND","h1()","values")
            }
        }

        public h5(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<h5 ${Commands(commands)}>${values}</h5>`)
                return values
            } else {
                CaptureException("NOTFOUND","h5()","values")
            }
        }

        public h6(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<h6 ${Commands(commands)}>${values}</h6>`)
                return values
            } else {
                CaptureException("NOTFOUND","h6()","values")
            }
        }

        public p(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<p ${Commands(commands)}>${values}</a>`)
                return values
            } else {
                CaptureException("NOTFOUND","p()","values")
            }
        }

        public strong(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<strong ${Commands(commands)}>${values}</strong>`)
                return values
            } else {
                CaptureException("NOTFOUND","strong()","values")
            }
        }

        public em(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<em ${Commands(commands)}>${values}</em>`)
                return values
            } else {
                CaptureException("NOTFOUND","em()","values")
            }
        }

        public br(){
            document.writeln("<br>")
        }

        public hr(){
            document.writeln("<hr>")
        }
        
        
        public a(values = "",href="#",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<a href=${href} ${Commands(commands)}>${values}</a>`)
                return values
            } else {
                CaptureException("NOTFOUND","a()","values")
            }
        }

        public button(values = "",commands={}){
            if (values != "" && values != null && values != undefined)
            {
                document.writeln(`<button ${Commands(commands)}>${values}</button>`)
                return values
            } else {
                CaptureException("NOTFOUND","button()","values")
            }
        }

        public input(type = "",commands={}){
            if (type != "" && type != null && type != undefined)
            {
                document.writeln(`<input type='${type}' ${Commands(commands)} >`)
                // No return
            } else {
                CaptureException("NOTFOUND","input()","type")
            }
        }
    }
}