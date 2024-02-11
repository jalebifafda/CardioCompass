from flask import Flask, request
import json
import pandas as pd
from flask_cors import CORS, cross_origin
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import precision_score

app = Flask(__name__)
CORS(app, resources={r"/*":{"origins":"*"}})

@app.route("/api/form", methods=['POST'])
@cross_origin(supports_credentials=True)
def form():
  body = json.loads(request.data)
  body = pd.DataFrame(body, index=[0])
  splitBP = body['Blood Pressure'].str.split('/', expand=True)
  splitBP.columns = ['Systolic', 'Diastolic']
  # print(cleaned.columns)
  heart_attack = pd.concat([body, splitBP], axis=1)
  cleaned = heart_attack.drop(columns=['Blood Pressure', 'Family History'])
  ordinal_map = {'Healthy':2,'Average':1,'Unhealthy':0}
  cleaned['Diet'] = cleaned['Diet'].map(ordinal_map)
  cols = ['Sex','Systolic','Diastolic', 'Diet']
  cleaned[cols] = cleaned[cols].astype(int)

  heart_attack_csv = pd.read_csv('cleaned_heart_attack_prediction_dataset.csv')

  X = heart_attack_csv[['Age', 'Cholesterol', 'Heart Rate',
          'Diabetes', 'Smoking', 'Obesity',
          'Alcohol Consumption', 'Exercise Hours Per Week', 'Diet',
          'Previous Heart Problems', 'Medication Use', 'Stress Level',
          'Sedentary Hours Per Day', 'BMI', 'Triglycerides',
          'Physical Activity Days Per Week', 'Sleep Hours Per Day',
          'Systolic', 'Diastolic','Sex']]
  y=heart_attack_csv['Heart Attack Risk'].values
  train_X,test_X,train_y,test_y = train_test_split(X,y, test_size=0.2 , random_state = 42)

  sc = StandardScaler()
  train_X = sc.fit_transform(train_X)
  test_X = sc.transform(test_X)

  models = {'SVM':SVC(kernel = 'rbf')}

  for i in models: 
      obj = models[i]
      obj.fit(train_X, train_y)
      obj_pred = obj.predict(test_X)
      nw_pred = obj.predict(cleaned)
      accuracy = accuracy_score(test_y,obj_pred)

  return json.dumps({"accuracy":accuracy, "risk": nw_pred.tolist()[0]}),200

if __name__ == "__main__":
  app.run()