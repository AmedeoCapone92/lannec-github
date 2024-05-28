

$(document).ready(function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // check page
    if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
        $('#body').html(home());
        activate_animations();
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
});


function grid_cell_gare(){
    return `
<div id="grid-cell-gare">
    <div id="all">
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
    </div>
</div>`;
}

function grid_cell_progetti_pubblici(){
    return `
<div id="cube-container">
    <div id="cube-scene" class="cube-scene">
        <div id="cube" class="cube show-front">
            <div class="cube__face cube__face--front"></div>
            <div id="cube-face-right" class="cube__face cube__face--right"></div>
        </div>
    </div>
</div>`;
}

function grid_cell_progetti_privati(){
    return `
    <div id="progetti-privati-cell" class="square-bands">
        <div class="bands"></div>
        <div id="label-bands" class="label-bands">PROGETTI<br>PRIVATI</div>
    </div>
`;
}

function home(){
    $('#menu-item-home').addClass('active');
    $('#menu-item-about').removeClass('active');
    $('#menu-item-news').removeClass('active');
    $('#menu-item-projects').removeClass('active');
    $('#menu-item-progetti-pubblici').removeClass('submenu-active');
    $('#menu-item-progetti-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    return `
<div class="row">
    <div class="col-12">
      ${header('LANNEC STUDIO')}
    </div>
</div>

<div class="row">
    <!-- Grid section goes first on small screens -->
    <div class="col-sm-6 col-12 grid-section order-sm-last order-first" style="margin-bottom: 20px">
        <div class="grid-container">
            <div id="grid-cell-1" class="grid-cell"></div>
            <div id="grid-cell-2" class="grid-cell"></div>
            <a href="/gare">
                <div id="grid-cell-3" class="grid-cell border-right" style="position: relative">
                    ${grid_cell_gare()}
                </div>
            </a>
            <a href="/progetti-pubblici">
                <div id="grid-cell-4" class="grid-cell">
                    ${grid_cell_progetti_pubblici()}
                </div>
            </a>
            <div id="grid-cell-5" class="grid-cell"></div>
            <div id="grid-cell-6" class="grid-cell border-right"></div>
            <div id="grid-cell-7" class="grid-cell border-down"></div>
            <a href="/progetti-privati" style="text-decoration: none;">
                <div id="grid-cell-8" class="grid-cell border-down">
                    ${grid_cell_progetti_privati()}
                </div>
            </a>
            <div id="grid-cell-9" class="grid-cell border-right border-down"></div>
        </div>
    </div>

    <!-- Content section goes second on small screens -->
    <div class="col-sm-6 col-12 content-section order-sm-first order-last">
        <h4>Mission</h4>
        <p>Lo studio lavora principalmente su tre rami, la progettazione per enti pubblici, la partecipazione a gare d'appalto per imprese e l'esecuzione di commesse medio-grandi per committenti privati e Società. Lo studio affronta processi complessi nel campo architettonico ed ingegneristico a tutto tondo, dall'analisi dei fabbisogni al collaudo finale delle opere realizzate attraverso il coordinamento di figure professionali specializzate.</p>
        
        <h4 style="padding-bottom:3px;">Contattaci!</h4>
        <p><a id="email-link" href="mailto:info@lannec.it">info@lannec.it</a></p>

        <h4 style="padding-bottom:10px;">Dove siamo</h4>
        <p><img src="/images/map-pin.svg" style="margin-right: 5px;" />Via Papa giovanni XXIII, 64
        73020, Castri di Lecce (LE)</p>
        <p><img src="/images/map-pin.svg" style="margin-right: 5px;" />Via Duca d’Aosta, 44
        73100, Lecce (LE)</p>
    </div>
</div>  
`;
}


function news_page(){
    $('#menu-item-home').removeClass('active');
    $('#menu-item-about').removeClass('active');
    $('#menu-item-projects').removeClass('active');
    $('#menu-item-news').addClass('active');
    $('#menu-item-progetti-pubblici').removeClass('submenu-active');
    $('#menu-item-progetti-privati').removeClass('submenu-active');
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
            <p>${marked.marked(news.content)}</p>
        </a>`;
    };
    html += `</div></div></div>`;
    $('#body').html(html);
}