!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}window.SchemaBehaviors=window.SchemaBehaviors||{},window.SchemaBehaviors.Schema={properties:{schemaResourceID:{type:String,value:""},schemaMap:{type:Object,value:{prefix:{oer:"http://oerschema.org/",schema:"http://schema.org/",dc:"http://purl.org/dc/terms/",foaf:"http://xmlns.com/foaf/0.1/",cc:"http://creativecommons.org/ns#",bib:"http://bib.schema.org"}},observer:"_schemaMapChanged"}},generateResourceID:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return"#"+e()+e()+"-"+e()+"-"+e()+"-"+e()},_schemaMapChanged:function(t,o){if("undefined"!==e(t)){this.schemaResourceID=this.getAttribute("resource"),""!=this.schemaResourceID&&null!=this.schemaResourceID||(this.schemaResourceID=this.generateResourceID(),this.setAttribute("resource",this.schemaResourceID));var r=t.prefix,n="";for(var s in r)r.hasOwnProperty(s)&&(n+=s+":"+r[s]+" ");""!=n&&this.setAttribute("prefix",n)}}}});
//# sourceMappingURL=schema-behaviors.umd.js.map
