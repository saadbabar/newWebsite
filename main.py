from flask import Flask, render_template, url_for

app = Flask(__name__) 

@app.route('/')
def about():
    return render_template("home.html")

@app.route('/projects')
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
