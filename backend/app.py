from flask import Flask, request
import json
import pandas as pd

app = Flask(__name__)

@app.route("/api/form", methods=['POST'])
def form():
  print("hi")
  body = request.form
  print(body)
  print(pd.DataFrame(body, index=[0]))
  return json.dumps(body),200

if __name__ == "__main__":
  app.run()