from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

USER = "Sanviklaad"

@app.route("/api/repos")
def repos():
    url = f"https://api.github.com/users/{USER}/repos"
    return jsonify(requests.get(url).json())

@app.route("/api/repo/<name>")
def repo(name):
    url = f"https://api.github.com/repos/{USER}/{name}"
    return jsonify(requests.get(url).json())

if __name__ == "__main__":
    app.run(debug=True)
