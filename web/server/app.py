from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return ':)'


@app.route('/test')
def test():
    data = [1,2,3]
    return jsonify(data)