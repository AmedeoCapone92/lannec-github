// Function to fetch and parse JSON
function fetchProject(folder, project_filename) {
    return fetch(`/progetti/${folder}/${project_filename}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for ${folder}/${project_filename}`);
            }
            var project = response.json();
            return project;
        });
}


function header(title){
    return `<header class="header">
    <div style="display: flex; align-items:center">
        <div style="margin-right: 10px; width:60px"><img src="/images/logo.svg"></div>
        <div style="flex: 1;">
            <h1 style="margin-bottom:0px;">${title}</h1>
            <span>AL VOSTRO FIANCO E UN PASSO INDIETRO</span>
        </div>
    </div>
</header>`;
}

// Function to check if the device has a touchscreen
function hasTouchscreen() {
    let hasTouch = false;
  
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
      hasTouch = true;
    }
  
    return hasTouch;
  }