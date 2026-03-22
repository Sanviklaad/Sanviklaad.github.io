from flask import Flask, jsonify
from flask_cors import CORS
from services.github_service import get_repos

app = Flask(__name__)
CORS(app)

@app.route("/api/repos")
def repos():
    return jsonify(get_repos())

@app.route("/api/health")
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(debug=True)
