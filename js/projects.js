marked.setOptions({
    breaks: true // Convert single line breaks to <br>
});

function preview_progetto(title, metadata, link, preview){
    return `
    <div class="col-sm-6 col-12 grid-section">
        <a href="${link}">
        <div class="preview-container" style="background-image: url('/${preview}')">
            <div class="project-title-container">
                <div class="project-title">${title}</div>
                <div class="project-metadata">${metadata['LOCALITÀ']}</div>
                <div class="project-metadata">${metadata['ANNO']}</div>
            </div>
        </div>
        </a>
    </div>`;
}

function left_menu(){
    return `
    <div class="left">
        <header>
            <a href="/" style="text-decoration: none">
            <div style="display: flex; align-items: center;">
                <div style="margin-right: 10px; width:30px"><img src="/images/logo.svg"></div>
                <div style="flex: 1;">
                    <h6 style="margin-bottom:0px">LANNEC STUDIO</h6>
                </div>
            </div>
            </a>
        </header>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div style="display: flex;">
            <a href="/progetti-pubblici">
                <img src="/images/thumbnail-3.png" class="thumbnail" id="thumbnail-image-3" alt="">
            </a>
            <a href="/gare">
                <img src="/images/thumbnail-2.png" class="thumbnail" id="thumbnail-image-2" alt="">
            </a>
            <a href="/progetti-privati">
                <img src="/images/thumbnail-1.png" class="thumbnail" id="thumbnail-image-1" alt="">
            </a>
        </div>
    </div>`;
}

PROJECTS_PAGE_CONTENT = {
    'progetti-pubblici': `
        <p>Redazione di progetti di architettura, paesaggio, ingegneria civile ed ambientale ai livelli di fattibilità tecnico economica e progettazione esecutiva, direzione dei lavori e coordinamento per la sicurezza in fase di progettazione ed esecuzione per enti pubblici a partire dalla consulenza ed il supporto professionale per l’intercettazione di Eurofinanziamenti o finanziamenti locali, PNRR, POR, FEASR, GAL, etc.</p>
        <p>Gestione di progetti complessi, progettazione integrata a partire da accurate analisi socio-economiche, ambientali, sviluppo di piani di gestione e coordinamento di attori specializzati per la.</p>
        <p>Opere progettate nel periodo 2022-2024 circa 10 Mln.</p>`,
    'progetti-privati': `
        <p>Progettazione architettonica, paesaggistica, ingegneristica a tutto tondo, a partire da un approccio di tipo psicologico per indagare le esigenze del committente attraverso un percorso guidato. Gestione delle pratiche edilizie e coordinamento dei rapporti con le imprese esecutrici. Direzione dei Lavori e coordinamento della sicurezza, erogazione pagamenti, certificazioni di Agibilità, pratiche energetiche e catastali. Lo studio affronta il processo progettuale a tutto tondo vantando un’esperienza pluriennale sul campo, garantendo rapidità, efficacia, buona esecuzione ed il miglior rapporto qualità prezzo negli interessi del cliente. </p>`,
    'gare': `
        <p>Partecipazione a Gare di Lavori, Servizi e Forniture per imprese e professionisti attraverso la redazione di offerte tecniche, economico-temporali ed amministrative. Lo studio garantisce un approccio specialistico ai criteri in base alle categorie e sottocategorie di pertinenza, per confezionare offerte sempre attuali grazie al monitoraggio continuo della tecnologia in ambito edile, civile, ed industriale. 
        </p>
        <p>
        Lavori aggiudicati nel 2023 per circa 6,8 Mln.
        </p>`
}


function projects_page(category, title){
    $('#menu-item-home').removeClass('active');
    $('#menu-item-about').removeClass('active');
    $('#menu-item-news').removeClass('active');
    $('#menu-item-projects').addClass('active');
    console.log('here', category);
    $('#menu-item-progetti-pubblici').removeClass('submenu-active');
    $('#menu-item-progetti-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    $(`#menu-item-${category}`).addClass('submenu-active');

    Promise.all(PROJECTS[category].map(filename => fetchProject(category, filename)))
        .then(pubblici => {
            var project = pubblici[0];
            // Process the combined data as needed
            var html = `
            <div class="row" style="margin-bottom:20px">
                <div class="col-sm-6 col-12 content-section">
                ${header(title)}
                
                <section>
                    ${PROJECTS_PAGE_CONTENT[category]}
                </section>
                </div>
                
                ${preview_progetto(project.title, project.metadata, category + '/' + PROJECTS[category][0].split('.json')[0], project.preview)}
            </div>`;
            for (var i = 1; i < pubblici.length; i+=2) {
                project = pubblici[i];
                html += `<div class="row">`;
                html += preview_progetto(project.title, project.metadata, category + '/' + PROJECTS[category][i].split('.json')[0], project.preview);
                project = pubblici[i+1];
                if (project) {
                    html += preview_progetto(project.title, project.metadata, category + '/' + PROJECTS[category][i+1].split('.json')[0], project.preview);
                }
                html += `</div>`;
            }
            $('#body').html(html);
        })
        .catch(error => {
            console.error("Error fetching or parsing JSON files:", error);
        });
}

function project_page(path){
    if (window.matchMedia("(max-width: 576px)").matches) {
        $('#phone-only-title').show();
    } else {
        $('#phone-only-title').hide();
    }

    var project_filename = path.split('/').pop() + '.json';
    var folder = path.split('/')[1];
    fetchProject(folder, project_filename)
        .then(project => {
            var content = '';
            project.content.forEach(c => {
                if (c.type == 'text') {
                    content += `<p>${marked.marked(c.content)}</p>`;
                }
                else if (c.type == 'image') {
                    content += `<img src="/${c.content}" style="width: 100%">`;
                }
            });
            var metadata = '';
            if (project.metadata) {
                for (var key in project.metadata) {
                    metadata += `<h5 style="margin-bottom: 0px;">${key}</h5>${marked.marked(project.metadata[key])}<br>`;
                }
            }
            var html = `
            <div class="col-12 project-container">
                ${left_menu()}
                <div class="middle">
                    <img src="/${project.preview}" alt="${project.title}" style="width: 100%">
                    <br><br><br>
                    <h2>${project.title}</h2>
                    <p style="font-size:1.2em; color: gray">${project.subtitle}</p>
                    <br>
                    ${content}
                </div>
                <div class="right">
                    <div style="margin-left: 30px; text-align: left">
                    <br><br><br>
                        ${metadata}
                    </div>
                </div>
            </div>
            `;
            $('#body').html(html)
        });
}