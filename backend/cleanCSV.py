import pandas as pd

heart_attack_csv = pd.read_csv('heart_attack_prediction_dataset.csv')

def splitBloodPressureAndClean():
    global heart_attack_csv
    splitBP = heart_attack_csv['Blood Pressure'].str.split('/', expand=True)
    splitBP.columns = ['Systolic', 'Diastolic']
    heart_attack = pd.concat([heart_attack_csv, splitBP], axis=1)
    cleaned = heart_attack.drop(columns=['Blood Pressure', 'Patient ID', 'Hemisphere', 'Continent', 'Family History', 'Income','Country'])
    # print(cleaned)
    ordinal_map = {'Healthy':2,'Average':1,'Unhealthy':0}
    cleaned["Sex"] = cleaned["Sex"].apply(lambda x: True if x == "Male" else False)
    cleaned['Diet'] = cleaned['Diet'].map(ordinal_map)
    cols = ['Sex','Systolic','Diastolic', 'Diet']
    # print(cols)
    cleaned[cols] = cleaned[cols].astype(int)
    return cleaned

splitBloodPressureAndClean().to_csv('cleaned_heart_attack_prediction_dataset.csv', index=False)
