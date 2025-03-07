from flask import send_from_directory, Flask

# creates a Flask application, named app
app = Flask(__name__)

# Serve static files from the 'static' directory
app.static_folder = 'static'

# a route where we will display a welcome message via an HTML template
@app.route("/")
def index():
    return send_from_directory('.', 'index.html')

# Serve static files (e.g., images, CSS, JS) from the respective directories
@app.route('/images/<path:filename>')
def serve_images(filename):
    return send_from_directory('images', filename)

@app.route('/css/<path:filename>')
def serve_css(filename):
    return send_from_directory('css', filename)

@app.route('/fonts/<path:filename>')
def serve_fonts(filename):
    return send_from_directory('fonts', filename)

@app.route('/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('js', filename)

@app.route('/progetti/<path:filename>')
def serve_projects(filename):
    return send_from_directory('progetti', filename)

@app.route('/robots.txt')
def robots():
    return send_from_directory('.', 'robots.txt')

@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory('.', 'sitemap.xml')


# Catch-all route to serve index.html for any other URL
@app.route('/<path:path>')
def catch_all(path):
    return send_from_directory('.', '404.html')

# run the application
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5002, debug=True)