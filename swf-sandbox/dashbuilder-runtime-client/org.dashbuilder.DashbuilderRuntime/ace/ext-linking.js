define("ace/ext/linking",["require","exports","module","ace/editor","ace/config"],(function(e,o,i){function t(e){var o=e.editor;if(e.getAccelKey()){o=e.editor;var i=e.getDocumentPosition(),t=o.session.getTokenAt(i.row,i.column);o._emit("linkHover",{position:i,token:t})}}function n(e){var o=e.getAccelKey();if(0==e.getButton()&&o){var i=e.editor,t=e.getDocumentPosition(),n=i.session.getTokenAt(t.row,t.column);i._emit("linkClick",{position:t,token:n})}}var c=e("ace/editor").Editor;e("../config").defineOptions(c.prototype,"editor",{enableLinking:{set:function(e){e?(this.on("click",n),this.on("mousemove",t)):(this.off("click",n),this.off("mousemove",t))},value:!1}})})),window.require(["ace/ext/linking"],(function(){}));