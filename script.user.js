// ==UserScript==
// @name         MathJax pour Cours et Devoirs
// @version      1.0
// @description  try to take over the world!
// @author       spf1
// @match        http://www.jeuxvideo.com/forums/42*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     if (window.MathJax === undefined) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML";
        var config = 'MathJax.Hub.Config({' + 'extensions: ["tex2jax.js"],' + 'tex2jax: { inlineMath: [["$","$"],["\\\\\\\\\\\\(","\\\\\\\\\\\\)"]], displayMath: [["$$","$$"],["\\\\[","\\\\]"]], processEscapes: true },' + 'jax: ["input/TeX","output/HTML-CSS"]' + '});' + 'MathJax.Hub.Startup.onload();';
        if (window.opera) {
            script.innerHTML = config
        } else {
            script.text = config
        }
        document.getElementsByTagName("head")[0].appendChild(script);
        (doChatJax = function() {
            window.setTimeout(doChatJax, 1000);
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        })();
    } else {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
})();
