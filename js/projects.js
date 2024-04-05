

function preview_progetto(title, subtitle, link, preview){
    return `
    <div class="col-sm-6 col-12 grid-section">
        <a href="${link}">
        <div class="preview-container" style="background-image: url('/${preview}')">
            <div class="project-title-container">
                <div class="project-title">${title}</div>
                <div class="project-subtitle">${subtitle}</div>
            </div>
        </div>
        </a>
    </div>`;
}

function progetti_pubblici(){
    $('#menu-item-home').removeClass('active');
    $('#menu-item-about').removeClass('active');
    $('#menu-item-projects').addClass('active');
    $('#menu-item-pubblici').addClass('submenu-active');
    $('#menu-item-privati').removeClass('submenu-active');
    $('#menu-item-gare').removeClass('submenu-active');

    // var project_filename = PROJECTS['progetti-publici'][0];

    Promise.all(PROJECTS['progetti-publici'].map(filename => fetchProject('progetti-pubblici', filename)))
        .then(pubblici => {
            var project = pubblici[0];
            // Process the combined data as needed
            var html = `
            <div class="row" style="margin-bottom:20px">
                <div class="col-sm-6 col-12 content-section">
                ${header('Progetti Pubblici')}
                
                <section>
                    <h2>Lorem Ipsum</h2>
                    <p>adskjna sddsajkas dkjn dsa</p>
                    <p>asd jnasd kjdnas kjadsn  ads.</p>
                </section>
                </div>
                
                ${preview_progetto(project.title, project.subtitle, 'progetti-pubblici/' + PROJECTS['progetti-publici'][0].split('.json')[0], project.preview)}
            </div>`;
            for (var i = 1; i < pubblici.length; i+=2) {
                project = pubblici[i];
                html += `<div class="row">`;
                html += preview_progetto(project.title, project.subtitle, 'progetti-pubblici/' + PROJECTS['progetti-publici'][i].split('.json')[0], project.preview);
                project = pubblici[i+1];
                if (project) {
                    html += preview_progetto(project.title, project.subtitle, 'progetti-pubblici/' + PROJECTS['progetti-publici'][i+1].split('.json')[0], project.preview);
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
    var project_filename = path.split('/').pop() + '.json';
    var folder = path.split('/')[1];
    fetchProject(folder, project_filename)
        .then(project => {
            var content = '';
            project.content.forEach(c => {
                if (c.type == 'text') {
                    content += `<p>${c.content}</p>`;
                }
                else if (c.type == 'image') {
                    content += `<img src="/${c.content}" style="width: 100%">`;
                }
            });
            var metadata = '';
            if (project.metadata) {
                for (var key in project.metadata) {
                    metadata += `<h5 style="margin-bottom: 0px;">${key}</h5>${project.metadata[key]}<br><br><br>`;
                }
            }
            var html = `
            <div class="col-12 project-container">
                <div class="left">
                    <header>
                        <div style="display: flex; align-items: center;">
                            <div style="margin-right: 10px; width:30px"><img src="/images/logo.svg"></div>
                            <div style="flex: 1;">
                                <h6 style="margin-bottom:0px">LANNEC STUDIO</h6>
                            </div>
                        </div>
                    </header>
                </div>
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