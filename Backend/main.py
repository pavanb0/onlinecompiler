import flask
import os
import subprocess
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)  # Initialize CORS extension

codetypes = {
    "python": "py",
    "javascript": "js",
    # Add other supported languages here
}

@app.route('/compiler', methods=['POST'])
def receive_data():
    data = flask.request.json

    if data['language'] not in codetypes:
        return "error", 400

    try:
        # Write the code to a file
        file_extension = codetypes[data['language']]
        with open(f"test.{file_extension}", "w") as file:
            file.write(data['code'])

        if file_extension == "py":
            result = subprocess.run(["python", 'test.py'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            output = result.stdout + result.stderr
        else:
            output = "Language not supported yet"

        response_data = {"output": output}
        return flask.jsonify(response_data), 200, {
            'Access-Control-Allow-Origin': '*'  # Add the CORS header
        }
    except Exception as e:
        return flask.jsonify({"error": str(e)}), 500, {
            'Access-Control-Allow-Origin': '*'  # Add the CORS header
        }

if __name__ == "__main__":
    app.run(host="192.168.0.104", port=8080, debug=True)
