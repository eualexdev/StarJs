namespace Star{
    export class Components extends Html.Components{
        public Template
        public View

        public constructor(){
            super()

            this.Template = {
                then: function (commands=""){
                    document.writeln(`<startemplate ${commands} >`)
                    usings.use_Template += 1
                },
                end: function(){
                    if (usings.use_Template > 0){
                        document.writeln("</startemplate>")
                        usings.use_Template -= 1
                    } else {
                        CaptureException("OPENNOT","Template.end()")
                    }
                }

            }

            this.View = {
                then: function (commands=""){
                    document.writeln(`<view ${commands} >`)
                    usings.use_View+= 1
                },
                end: function(){
                    if (usings.use_View > 0){
                        document.writeln("</view>")
                        usings.use_View -= 1
                    } else {
                        CaptureException("OPENNOT","View.end()")
                    }
                }

            }

        }

        // public Text(values,commands=''){
            
        // } fazer o component texxt

        public StatusBar(color='#333'){
            document.writeln(`<meta name="theme-color" content="${color}" >`)
        }
        
        public Background(color='#333'){
            document.writeln(`<meta name="background-color" content="${color}" >`)
        }
    }
}
const Components = new Star.Components()
