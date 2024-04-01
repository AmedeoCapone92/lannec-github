// Function to fetch and parse JSON
function fetchProject(folder, project_filename) {
    return fetch(`/progetti/${folder}/${project_filename}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok for ${filePath}`);
            }
            var project = response.json();
            return project;
        });
}