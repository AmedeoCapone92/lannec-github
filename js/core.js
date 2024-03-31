

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
        $('#body').html(progetti_pubblici());
    } else if (window.location.pathname == '/progetti-privati') {

    } else if (window.location.pathname == '/gare') {
        
    } else {
        // redirect to home
        window.location = '/';
    }
});


function home(){
    $('#menu-item-home').addClass('active');
    $('#menu-item-about').removeClass('active');
    $('#menu-item-projects').removeClass('active');
    $('#menu-item-pubblici').removeClass('submenu-active');
    $('#menu-item-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    return `<div class="col-sm-6 col-12 content-section">
    ${header('LANNEC STUDIO')}
      
      <section id="mission">
        <h2>OUR MISSION!</h2>
        <p>La missione è fare architettura e non edilizia, in tempi rapidi e con l'uso di software all'avanguardia, trasporre nel contemporaneo i principi di bellezza, solidità e funzionalità, attraverso la ricerca tecnologica ed estetica continua, in dialogo con il corso dei tempi.</p>
        <p>L'azienda lavora su tre rami, la progettazione per enti pubblici, la partecipazione a gare d'appalto per imprese e l'esecuzione di commesse medio-grandi per committenti privati. Lo studio affronta il processo architettonico ed ingegneristico a tutto tondo, dall'analisi dei fabbisogni con un approccio psicologico al collaudo finale delle opere realizzate.</p>
      </section>
      
      <section id="find-us">
        <h2>FIND US!</h2>
        <address>
          <p><img src="/images/map-pin.svg">Castri di Lecce, via Papa Giovanni XXIII, 64 73020</p>
          <p>Lecce, Via Duca d'Aosta, 44 73100</p>
          <p>Phone: +39 328 5786003</p>
          <p>C.F./P.Iva 05130990756</p>
          <p>Email: <a href="mailto:lannecstudio@pec.it">lannecstudio@pec.it</a></p>
        </address>
      </section>
</div>
<div class="col-sm-6 col-12 grid-section">
    <div class="grid-container">
        <div class="grid-cell">
        </div>
        <div class="grid-cell"></div>
        <a href="/gare"><div class="grid-cell border-right">GARE</div></a>
        <a href="/progetti-pubblici"><div class="grid-cell">PROGETTI PUBBLICI</div></a>
        <div class="grid-cell"></div>
        <div class="grid-cell border-right"></div>
        <div class="grid-cell border-down"></div>
        <a href="/progetti-privati"><div class="grid-cell border-down">PROGETTI PRIVATI</div></a>
        <div class="grid-cell border-right border-down"></div>
    </div>
</div>`;
}

function about(){
    $('#menu-item-home').removeClass('active');
    $('#menu-item-about').addClass('active');
    $('#menu-item-projects').removeClass('active');
    $('#menu-item-pubblici').removeClass('submenu-active');
    $('#menu-item-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    return `
    <div class="col-sm-2 col-md-3 col-0"></div>
    <div class="col-sm-8 col-md-6 col-12 content-section">
        ${header('LANNEC STUDIO')}

        <section id="mission">
            <h2>OUR MISSION!</h2>
            <p>La missione è fare architettura e non edilizia, in tempi rapidi e con l'uso di software all'avanguardia, trasporre nel contemporaneo i principi di bellezza, solidità e funzionalità, attraverso la ricerca tecnologica ed estetica continua, in dialogo con il corso dei tempi.</p>
            <p>L'azienda lavora su tre rami, la progettazione per enti pubblici, la partecipazione a gare d'appalto per imprese e l'esecuzione di commesse medio-grandi per committenti privati. Lo studio affronta il processo architettonico ed ingegneristico a tutto tondo, dall'analisi dei fabbisogni con un approccio psicologico al collaudo finale delle opere realizzate.</p>
        </section>

        <section id="our-team">
            <h2>OUR TEAM!</h2>
            <div class="row">
                <div class="col-4"></div>
                <div class="col-8"><h4>ARCHITETTO AMEDEO CAPONE</h4></div>
            </div>
            <div class="row">
                <div class="col-4">
                    <img src="/images/profile.png" alt="Amedeo Capone" style="width: 100%">
                </div>
                <div class="col-8">
                La missione è fare architettura e non edilizia, in tempi rapidi e con l'uso di software all'avanguardia, trasporre nel contempo-raneo i principi di bellezza, solidità e funzionalità, attraverso la ricerca tecnologica ed estetica continua, in dialogo con il corso dei tempi.
                L'azienda lavora su tre rami, la progettazione per enti pubblici, la partecipazione a gare d'appalto per imprese e l'esecuzione di commesse medio-grandi per committenti privati. Lo studio affronta il processo architettonico ed ingegneristico a tutto tondo, dall'analisi dei fabbisogni con un approccio psicologico al collaudo finale delle opere realizzate.
                </div>
            </div>
        </section>
    </div>
    <div class="col-sm-2 col-md-3 col-0" style="border-left: 1px solid black;">
        <div style="margin-left: 30px; text-align: left">
            <br><br><br>
            <h5>CONTACT US!</h5>
            +39 328 5786003<br>
            C.F./P.Iva 05130990756<br>
            <a style="text-decoration: none; href="mailto:lannecstudio@pec.it">lannecstudio@pec.it</a>
            <br><br>
            <h5>FIND US!</h5>
            Castri di Lecce,<br>
            via Papa Giovanni XXIII,<br>
            64 73020<br>
            Lecce, Via Duca d'Aosta, 44 73100<br>        
        </div>
    </div>
`;
}


function header(title){
    return `<header>
    <div style="display: flex; align-items: center;">
        <div style="margin-right: 10px; width:60px"><img src="/images/logo.svg"></div>
        <div style="flex: 1;">
            <h1 style="margin-bottom:0px">${title}</h1>
            <p>AL VOSTRO FIANCO E UN PASSO INDIETRO</p>
        </div>
    </div>
</header>`;
}


function progetti_pubblici(){
    $('#menu-item-home').removeClass('active');
    $('#menu-item-about').removeClass('active');
    $('#menu-item-projects').addClass('active');
    $('#menu-item-pubblici').addClass('submenu-active');
    $('#menu-item-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    return `
    <div class="row" style="margin-bottom:20px">
        <div class="col-sm-6 col-12 content-section">
        ${header('Progetti Pubblici')}
        
        <section>
            <h2>Lorem Ipsum</h2>
            <p>adskjna sddsajkas dkjn dsa</p>
            <p>asd jnasd kjdnas kjadsn  ads.</p>
        </section>
        </div>
        <div class="col-sm-6 col-12 grid-section">
            <div id="progetti-pubblici-preview" class="project-preview">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 col-12 grid-section">
            <div id="progetti-privati-preview" class="project-preview">
            </div>
        </div>
        <div class="col-sm-6 col-12 grid-section">
            <div id="gare-preview" class="project-preview">
            </div>
        </div>
    </div>`;
}