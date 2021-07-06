import os

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():
  data = {
    "title": "うえええええ",
    "message": "こんにちは"
  }
  flask_env = os.environ["FLASK_ENV"]

  return render_template('index.html', data=data, flask_env=flask_env)

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000, debug=True)