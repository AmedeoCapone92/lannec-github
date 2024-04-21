function scalePageFlip() {
    var container = document.getElementById('all');
    var pageFlip = document.getElementById('page-flip');
    var scale = container.clientWidth / pageFlip.offsetWidth;
    container.style.transform = 'scale(' + scale + ')';
    container.style.transformOrigin = 'top left';
    container.style.height = (pageFlip.offsetHeight * scale) + 'px';
}

function scaleCube() {
    var container = document.getElementById('cube-scene');
    var pageFlip = document.getElementById('cube');
    var scale = container.clientWidth / pageFlip.offsetWidth;
    container.style.transform = 'scale(' + scale + ')';
    container.style.transformOrigin = 'top left';
    container.style.height = (pageFlip.offsetHeight * scale) + 'px';
}
