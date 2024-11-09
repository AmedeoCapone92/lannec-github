
function about(){
    $('#menu-item-home').removeClass('active');
    $('#menu-item-about').addClass('active');
    $('#menu-item-news').removeClass('active');
    $('#menu-item-projects').removeClass('active');
    $('#menu-item-progetti-pubblici').removeClass('submenu-active');
    $('#menu-item-progetti-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    return `
<div class="row">
<div class="col-sm-2 col-md-3 d-none d-md-block">
    ${left_menu()}
</div>
    <div class="col-sm-8 col-md-6 col-12 content-section">    
        <h2 class="chi-siamo-h2" >Chi siamo</h2>
        Lannec è uno studio professionale che si occupa di architettura, pianificazione urbana e servizi d’ingegneria civile ed ambientale, nato nel 2022. 
        <br>
        <h2 class="chi-siamo-h2">Vision</h2>
        Lavoriamo quotidianamente per decifrare e mettere in atto le complicazioni del bello, in tempi rapidi e con l'uso di software all'avanguardia, trasporre nel contemporaneo i principi di bellezza, solidità e funzionalità, attraverso la ricerca tecnologica ed estetica continua, in dialogo con il corso dei tempi.
        <br>    
        <h2 class="chi-siamo-h2">Servizi</h2>
        Accesso a bonus edilizi, pratiche edilizie, procedure paesaggistiche, appalti pubblici, partecipazione a bandi, efficientamento energetico, progettazione di strutture, direzione dei lavori, offerta economicamente più vantaggiosa, appalti integrati, pratiche catastali, perizie di stima, nuove costruzioni, ristrutturazioni, coordinamento per la sicurezza in fase di progettazione ed esecuzione, altro.
        <br>
        <br>

        <h2 class="chi-siamo-h2">Team</h2>
        <h3 class="chi-siamo-h3">Fondatore e referente:</h3>
        Arch. Amedeo Capone
        <h3 class="chi-siamo-h3">Collaborazioni stabili:</h3> 
        Arch. Andrea Marchettini, Ing. Giovanni delle Donne, Dott. Geol. Luigi Giorgio, Geom. P. Rollo.

        <h3 class="chi-siamo-h3">Hanno lavorato con noi:</h3>
        Orange Public Management, Arch. Enrico Durante, Arch. N. Conte, Geom. F. Nahi, Geom. A. Rubichi, Ing. C. Di Donfrancesco, Dott. M. Stasi, Ing. D. Centonze, Dott.ssa Alessia Orlando, Arch. Roberto de Giorgi.

    </div>
    <div class="col-sm-2 col-md-3 col-0" style="border-left: 1px solid black;">
        <div style="margin-left: 30px; text-align: left">
            <h3 class="chi-siamo-h3" style="padding-bottom:3px;">Contattaci!</h3>
            <p><a id="email-link" href="mailto:info@lannec.it">info@lannec.it</a></p>

            <h3 class="chi-siamo-h3" style="padding-bottom:10px;">Dove siamo</h3>

            <p style="display: flex"><img src="/images/map-pin.svg" style="margin-right: 5px;" alt="Map pin" />Via Papa giovanni XXIII, 64
            73020, Castri di Lecce (LE)</p>
            <p style="display: flex"><img src="/images/map-pin.svg" style="margin-right: 5px;" alt="Map pin" />Via Duca d’Aosta, 44
            73100, Lecce (LE)</p>

        </div>
    </div>
</div>`;
}