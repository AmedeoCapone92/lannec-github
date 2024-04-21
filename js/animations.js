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


function activate_animations(){
    window.addEventListener('resize', scalePageFlip);
    scalePageFlip();

    window.addEventListener('resize', scaleCube);
    scaleCube();

    var cubeDiv = document.getElementById('cube-container');
    var cube = document.querySelector('.cube');
    var currentClass = '';

    function turnRight() {
        if ( currentClass ) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add( 'show-right' );
        currentClass = 'show-right';
    }
    function turnLeft() {
        if ( currentClass ) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add( 'show-left' );
        currentClass = 'show-left';
    }

    // Add the event listener for hover (mouseenter)
    cubeDiv.addEventListener('mouseenter', turnRight);
    cubeDiv.addEventListener('mouseleave', turnLeft);
}