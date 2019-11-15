function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
    hiddenToc = document.querySelectorAll('#leaf-toc');
    actualToc = document.querySelectorAll('#toc');

    if (hiddenToc.length && actualToc.length) {
        // hugo's toc support is fucked so we need to move shit around by hand
        // computers are garbage
        actualToc[0].innerHTML = hiddenToc[0].innerHTML;
    }
});


