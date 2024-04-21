

$(document).ready(function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // check page
    if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
        $('#body').html(home());
    } else if (window.location.pathname == '/about') {
        $('#body').html(about());
    } else if (window.location.pathname == '/progetti-pubblici') {
        projects_page('progetti-pubblici', 'Progetti Pubblici');
    } else if (window.location.pathname == '/progetti-privati') {
        projects_page('progetti-privati', 'Progetti Privati');
    } else if (window.location.pathname == '/gare') {
        projects_page('gare', 'Gare');
    } else if (window.location.pathname == '/news') {
        news_page();
    } else if (window.location.pathname.startsWith('/progetti-pubblici/') || window.location.pathname.startsWith('/progetti-privati/') || window.location.pathname.startsWith('/gare/')){
        project_page(window.location.pathname);
    } else {
        // redirect to home
        window.location = '/';
    }

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
});


function grid_cell_gare(){
    return `<div id="all">
    <div id="page-flip">
        <div id="r1">
        <div id="p1">
            <div>
            <div></div>
            </div>
        </div>
        </div>
        <div id="p2">
            <div>
                <div class="gare-centered">GARE</div>
            </div>
        </div>
        <div id="r3">
        <div id="p3">
            <div>
            <div></div>
            </div>
        </div>
        </div>
        <div class="s">
        <div id="s3">
            <div id="sp3"></div>
        </div>
        </div>
        <div class="s" id="s4">
        <div id="s2">
            <div id="sp2">E</div>
        </div>
        </div>
    </div>
</div>`;
}


function home(){
    $('#menu-item-home').addClass('active');
    $('#menu-item-about').removeClass('active');
    $('#menu-item-news').removeClass('active');
    $('#menu-item-projects').removeClass('active');
    $('#menu-item-pubblici').removeClass('submenu-active');
    $('#menu-item-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    return `
<div class="row">
    <div class="col-12">
      ${header('LANNEC STUDIO')}
    </div>
</div>

<div class="row">
    <!-- Grid section goes first on small screens -->
    <div class="col-sm-6 col-12 grid-section order-sm-last order-first">
    <div class="grid-container">
        <div class="grid-cell"></div>
        <div class="grid-cell"></div>
        <a href="/gare">
        <div class="grid-cell border-right" style="position: relative">
            <div id="grid-cell-gare">${grid_cell_gare()}</div>
        </div>
        </a>
        <a href="/progetti-pubblici">
        <div id="cube-container" class="grid-cell">
            <div id="cube-scene" class="cube-scene">
            <div id="cube" class="cube show-front">
                <div class="cube__face cube__face--front"></div>
                <div class="cube__face cube__face--right">PROGETTI PUBBLICI</div>
            </div>
            </div>
        </div>
        </a>
        <div class="grid-cell"></div>
        <div class="grid-cell border-right"></div>
        <div class="grid-cell border-down"></div>
        <a href="/progetti-privati" style="text-decoration: none;">
        <div class="grid-cell border-down">
            <div class="square-bands">
            <div class="bands"></div>
            <div class="label-bands">PROGETTI<br>PRIVATI</div>
            </div>
        </div>
        </a>
        <div class="grid-cell border-right border-down"></div>
    </div>
    </div>

    <!-- Content section goes second on small screens -->
    <div class="col-sm-6 col-12 content-section order-sm-first order-last">
    <section id="mission">
        <h2>OUR MISSION!</h2>
        <p>
        La missione è fare architettura e non edilizia, in tempi rapidi e con
        l'uso di software all'avanguardia, trasporre nel contemporaneo i
        principi di bellezza, solidità e funzionalità, attraverso la ricerca
        tecnologica ed estetica continua, in dialogo con il corso dei tempi.
        </p>
        <p>
        L'azienda lavora su tre rami, la progettazione per enti pubblici, la
        partecipazione a gare d'appalto per imprese e l'esecuzione di commesse
        medio-grandi per committenti privati. Lo studio affronta il processo
        architettonico ed ingegneristico a tutto tondo, dall'analisi dei
        fabbisogni con un approccio psicologico al collaudo finale delle opere
        realizzate.
        </p>
    </section>

    <section id="find-us">
        <h2>FIND US!</h2>
        <address>
        <p>
            <img src="/images/map-pin.svg" />Castri di Lecce, via Papa Giovanni
            XXIII, 64 73020
        </p>
        <p>Lecce, Via Duca d'Aosta, 44 73100</p>
        <p>Phone: +39 328 5786003</p>
        <p>C.F./P.Iva 05130990756</p>
        <p>
            Email: <a href="mailto:lannecstudio@pec.it">lannecstudio@pec.it</a>
        </p>
        </address>
    </section>
    </div>
</div>  
`;
}


function news_page(){
    $('#menu-item-home').removeClass('active');
    $('#menu-item-about').removeClass('active');
    $('#menu-item-projects').removeClass('active');
    $('#menu-item-news').addClass('active');
    $('#menu-item-pubblici').removeClass('submenu-active');
    $('#menu-item-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    var html = `<div class="row">
        <div class="col-sm-2 col-md-3 col-0"></div>
        <div class="col-sm-8 col-md-6 col-12 content-section">
            <h1>News</h1><br><br>
            <div class="news-container">`;
    for (var i = 0; i < NEWS.length; i++) {
        var news = NEWS[i];
        html += `
        <a href="${news.link}" class="news">
            <h3>${news.title}</h3>
            <img src="/${news.preview}" alt="${news.title}" style="width:100%">
            <p>${news.content}</p>
        </a>`;
    };
    html += `</div></div></div>`;
    $('#body').html(html);
}


function show_home_grid_projects_images(project_type){
    console.log('ready');
}