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

PROJECT_GRID_CELLS = {
    'gare': 3,
    'progetti-pubblici': 4,
    'progetti-privati': 8,
}

PROJECT_TYPE_TO_RENDER_FN = {
    'progetti-privati': grid_cell_progetti_privati,
    'progetti-pubblici': grid_cell_progetti_pubblici,
    'gare': grid_cell_gare,
}


function show_home_grid_projects_images(project_type){

    var progetti = PROJECTS[project_type];

    // randomly select 4 projects no repeat
    var selected_projects = [];
    while (selected_projects.length < 4 && selected_projects.length < progetti.length){
        var project = progetti[Math.floor(Math.random() * progetti.length)];
        if (!selected_projects.includes(project)){
            selected_projects.push(project);
        }
    }

    // now select N random grid cells [1 to 9] excluding the project_type cell
    var selected_cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    selected_cells = selected_cells.filter(cell => cell != PROJECT_GRID_CELLS[project_type]);
    for (var cell of selected_cells){
        $('#' + 'grid-cell-' + cell).empty();
    }
    selected_cells.sort(() => Math.random() - 0.5);
    selected_cells = selected_cells.slice(0, 4);

    for (let cell of selected_cells){
        // set the background image of the cell
        var project_filename = selected_projects.pop();
        if (project_filename){
            fetchProject(project_type, project_filename)
            .then(project => {
                var preview = '/' + project.preview;
                // Create an <img> element with a fade-in effect
                var img = $('<img>')
                .attr('src', preview) // Set the source of the image
                .css({
                    'width': '100%', // Scale to the size of the div
                    'height': '100%',
                    'object-fit': 'cover', // Ensure the image fills the div
                    'animation': 'fadeIn 3.5s', // Apply the 5s fade-in animation
                });
                $('#' + 'grid-cell-' + cell).append(img);
            })
        }
    }
}

function reset_grid(project_type){
    for (var call of [1,2,5,6,7,9]){
        $('#' + 'grid-cell-' + call).empty();
    }
    for (let [key, value] of Object.entries(PROJECT_GRID_CELLS)) {
        if (key !== project_type)
            $('#grid-cell-' + value).html(PROJECT_TYPE_TO_RENDER_FN[key]);
    }
    activate_animations();
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
    cubeDiv.addEventListener('mouseenter', () =>  { show_home_grid_projects_images('progetti-pubblici')});
    cubeDiv.addEventListener('mouseleave', turnLeft);
    cubeDiv.addEventListener('mouseleave', () => { reset_grid("progetti-pubblici") });


    var pageFlipDiv = document.getElementById('grid-cell-gare');
    pageFlipDiv.addEventListener('mouseenter', () =>  { show_home_grid_projects_images('gare')});
    pageFlipDiv.addEventListener('mouseleave', () => { reset_grid("gare") });


    var bandsDiv = document.getElementById('progetti-privati-cell');
    bandsDiv.addEventListener('mouseenter', () =>  { show_home_grid_projects_images('progetti-privati')});
    bandsDiv.addEventListener('mouseleave', () => { reset_grid("progetti-privati") });

}