
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