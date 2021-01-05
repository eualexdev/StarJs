var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Star;
(function (Star) {
    var Components = /** @class */ (function (_super) {
        __extends(Components, _super);
        function Components() {
            var _this = _super.call(this) || this;
            _this.Template = {
                then: function (commands) {
                    if (commands === void 0) { commands = ""; }
                    document.writeln("<startemplate " + commands + " >");
                    usings.use_Template += 1;
                },
                end: function () {
                    if (usings.use_Template > 0) {
                        document.writeln("</startemplate>");
                        usings.use_Template -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "Template.end()");
                    }
                }
            };
            _this.View = {
                then: function (commands) {
                    if (commands === void 0) { commands = ""; }
                    document.writeln("<view " + commands + " >");
                    usings.use_View += 1;
                },
                end: function () {
                    if (usings.use_View > 0) {
                        document.writeln("</view>");
                        usings.use_View -= 1;
                    }
                    else {
                        CaptureException("OPENNOT", "View.end()");
                    }
                }
            };
            return _this;
        }
        Components.prototype.Text = function (values, commands) {
            if (commands === void 0) { commands = ''; }
            if (values != null && values != "" && values != undefined) {
                document.writeln("<text " + commands + ">" + values + "</text>");
            }
            else {
                CaptureException("NOTFOUND", "Text()", "values");
            }
        };
        Components.prototype.StatusBar = function (color) {
            if (color === void 0) { color = '#333'; }
            document.writeln("<meta name=\"theme-color\" content=\"" + color + "\" >");
        };
        Components.prototype.Background = function (color) {
            if (color === void 0) { color = '#333'; }
            document.writeln("<meta name=\"background-color\" content=\"" + color + "\" >");
        };
        return Components;
    }(Html.Components));
    Star.Components = Components;
})(Star || (Star = {}));
var Components = new Star.Components();
