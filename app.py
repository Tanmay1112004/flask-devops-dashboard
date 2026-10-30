from datetime import datetime, timezone
from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/health")
def health():
    return jsonify({
        "status": "healthy",
        "application": "DevOps Learning Dashboard",
        "timestamp": datetime.now(timezone.utc).isoformat()
    })

@app.route("/api/stats")
def stats():
    return jsonify({
        "projects": 4,
        "completed_tasks": 12,
        "learning_hours": 28,
        "status": "All systems operational"
    })

if __name__ == "__main__":
    # 0.0.0.0 makes the app reachable outside the container.
    app.run(host="0.0.0.0", port=5000, debug=False)
