// ==UserScript==
// @name         MathJax pour Cours et Devoirs
// @version      2.0
// @description  Active le rendu Latex avec MathJax
// @author       spf1
// @match        http://www.jeuxvideo.com/forums/42-35*
// @match        http://www.jeuxvideo.com/forums/1-35*

// @grant        none
// ==/UserScript==

javascript: (function() {
    if (window.MathJax === undefined) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML";
        var config = 'MathJax.Hub.Config({' + 'extensions: ["tex2jax.js"],' + 'tex2jax: { inlineMath: [["$","$"],["\\\\\\\\\\\\(","\\\\\\\\\\\\)"]], displayMath: [["$$","$$"],["\\\\[","\\\\]"]], processEscapes: true },' + 'jax: ["input/TeX","output/HTML-CSS"]' + '});' + 'MathJax.Hub.Startup.onload();';
        if (window.opera) {
            script.innerHTML = config
        } else {
            script.text = config
        }
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
})();
