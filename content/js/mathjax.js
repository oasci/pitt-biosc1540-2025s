window.MathJax = {
    tex: {
        inlineMath: [['$', '$']],
        displayMath: [['$$', '$$']],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*",  // Do not ignore any class
        processHtmlClass: "arithmatex"  // Process math inside this class
    }
};

// Check if document$ exists before using it
if (typeof document$ !== "undefined") {
    document$.subscribe(() => {
        MathJax.startup.output.clearCache();
        MathJax.typesetClear();
        MathJax.texReset();
        MathJax.typesetPromise();
    });
} else {
    // Fallback: If document$ is not available, just run MathJax once on load
    document.addEventListener("DOMContentLoaded", () => {
        MathJax.typesetPromise();
    });
}
