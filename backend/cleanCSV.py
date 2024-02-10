import pandas as pd
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import precision_score

heart_attack_csv = pd.read_csv('heart_attack_prediction_dataset.csv')

def splitBloodPressureAndClean():
    global heart_attack_csv
    splitBP = heart_attack_csv['Blood Pressure'].str.split('/', expand=True)
    splitBP.columns = ['Systolic', 'Diastolic']
    heart_attack = pd.concat([heart_attack_csv, splitBP], axis=1)
    cleaned = heart_attack.drop(columns=['Blood Pressure', 'Patient ID', 'Hemisphere', 'Continent', 'Family History', 'Income','Country'])
    print(cleaned)
    cleaned = pd.get_dummies(cleaned, columns=['Sex', 'Diet'], drop_first=False)
    cols = ['Sex_Female','Sex_Male','Systolic','Diastolic', 'Diet_Healthy', 'Diet_Unhealthy', 'Diet_Average']
    cleaned[cols] = cleaned[cols].astype(int)
    return cleaned

#splitBloodPressureAndClean().to_csv('cleaned_heart_attack_prediction_dataset.csv', index=False)
h = splitBloodPressureAndClean()
print(h)

from sklearn.model_selection import train_test_split
X = h[['Age', 'Cholesterol', 'Heart Rate',
        'Diabetes', 'Smoking', 'Obesity',
        'Alcohol Consumption', 'Exercise Hours Per Week', 'Diet_Healthy', 'Diet_Unhealthy', 'Diet_Average',
        'Previous Heart Problems', 'Medication Use', 'Stress Level',
        'Sedentary Hours Per Day', 'BMI', 'Triglycerides',
        'Physical Activity Days Per Week', 'Sleep Hours Per Day',
         'Systolic', 'Diastolic','Sex_Female',
         'Sex_Male']]
y=h['Heart Attack Risk'].values
train_X,test_X,train_y,test_y = train_test_split(X,y, test_size=0.2 , random_state = 0)

from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
train_X = sc.fit_transform(train_X)
test_X = sc.transform(test_X)

models = {'SVM':SVC(kernel = 'rbf')}

for i in models: 
    obj = models[i]
    obj.fit(train_X, train_y)
    obj_pred = obj.predict(test_X)
    accuracy = accuracy_score(test_y,obj_pred)
    precision = precision_score(test_y,obj_pred,zero_division=1)
    print('Accuracy of '+i+': ',accuracy)
    print('Precision of '+i+': ',precision)