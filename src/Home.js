import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Results from "./Results";

const Home = (props) => {
    const history = useHistory

    const handleSubmit = () => {
        console.log("hiii")
        const results = {
            Age: age,
            Sex: sex == "male",
            Cholesterol: cholesterol,
            "Blood Pressure": bp,
            "Heart Rate": heart,
            Diabetes: diabetes,
            "Family History": family,
            Smoking: smoke,
            Obesity: obesity,
            "Alcohol Consumption": alcohol,
            "Exercise Hours Per Week": exercise,
            Diet: diet,
            "Previous Heart Problems": previous,
            "Medication Use": meds,
            "Stress Level": stress,
            "Sedentary Hours Per Day": sedentary,
            BMI: bmi,
            Triglycerides: tri,
            "Physical Activity Days Per Week": physical,
            "Sleep Hours Per Day": sleep
        }
        console.log(results)

        fetch('http://127.0.0.1:5000/api/form', {
            method: 'POST',
            body: JSON.stringify(results),
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            
        })
        .then((response) => {
            setRes(response.body)
            setReturned(true)
            console.log(response.body)
            console.log(response.text())
        })
    }

    const [res, setRes] = useState({});
    const [returned, setReturned] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState(18);
    const [sex, setSex] = useState('0');
    const [cholesterol, setCholesterol] = useState('0');
    const [bp, setBp] = useState('0');
    const [heart, setHeart] = useState('0');
    const [diabetes, setDiabetes] = useState('0');
    const [family, setFamily] = useState('0');
    const [smoke, setSmoke] = useState('0');
    const [obesity, setObesity] = useState('0');
    const [alcohol, setAlcohol] = useState('0');
    const [exercise, setExercise] = useState('0');
    const [diet, setDiet] = useState('Average');
    const [previous, setPrevious] = useState('0');
    const [meds, setMeds] = useState('0');
    const [stress, setStress] = useState('0');
    const [sedentary, setSedentary] = useState('0');
    const [bmi, setBMI] = useState('0');
    const [tri, setTri] = useState('0');
    const [physical, setPhysical] = useState('0');
    const [sleep, setSleep] = useState('0');
    
    return (
    <div className="App">
       <img src={require("./HeartCompass_Logo_Design.jpg")} width="400" />
        {returned ? <Results l={res}/> : <div className="info">
          <label onChange={(e) => setName(e.target.value)}>
            Name:
            <div>
            <input type="text" name="name" />
            </div>
            </label>
            
            <label onChange={(e) => setAge(e.target.value)}>
            Age:
            <div>
            <input type="number" name="age" />
            </div>
            </label>
            
            Sex:
            <div>
              <label onChange={(e) => setSex(e.target.value)}>

                <input type="radio" name="sex" value="male" />
                Male
                
                <input type="radio" name="sex" value="female" />
                Female
              </label>
            </div>
            <label onChange={(e) => setCholesterol(e.target.value)}>
            
            Cholesterol:
            <div>
            <input type="number" name="cholesterol" />
            </div>
            </label>
            
            <label onChange={(e) => setBp(e.target.value)}>
            Blood Pressure:
            <div>
            <input type="text" name="bloodpressure" />
            </div>
            </label>
            
            <label onChange={(e) => setHeart(e.target.value)}>
            Heart Rate:
            <div>
            <input type="number" name="heartrate" />
            </div>
            </label>
            
            Diabetes:
            <div>
              <label onChange={(e) => setDiabetes(e.target.value)}>

                <input type="radio" name="diabetes" value="1" />
                Yes

                <input type="radio" name="diabetes" value="0" />
                No
              </label>
            </div>
            
            Family History of Heart Disease:
            <div>
              <label onChange={(e) => setFamily(e.target.value)}>

                <input type="radio" name="familyhistory" value="1" />
                Yes

                <input type="radio" name="familyhistory" value="0" />
                No
              </label>
            </div>
            
            Do you Smoke?:
            <div>
              <label onChange={(e) => setSmoke(e.target.value)}>

                <input type="radio" name="smoking" value="1" />
                Yes

                <input type="radio" name="smoking" value="0" />
                No
              </label>
            </div>
            
            Obesity:
            <div>
              <label onChange={(e) => setObesity(e.target.value)}>

                <input type="radio" name="obesity" value="1" />
                Yes

                <input type="radio" name="obesity" value="0" />
                No
              </label>
            </div>
            
            Alcohol Consumption:
            <div>
              <label onChange={(e) => setAlcohol(e.target.value)}>

                <input type="radio" name="alcohol" value="1" />
                Yes

                <input type="radio" name="alcohol" value="0" />
                No
              </label>
            </div>
            
            <label onChange={(e) => setExercise(e.target.value)}>
            Exercise Hours Per Week:
            <div>
            <input type="number" name="exercise" />
            </div>
            </label>
            
            Diet:
            <div>
              <label onChange={(e) => setDiet(e.target.value)}>

                <input type="radio" name="diet" value="Average" />
                Average

                <input type="radio" name="diet" value="Unhealthy" />
                Unhealthy

                <input type="radio" name="diet" value="Healthy" />
                Healthy
              </label>
            </div>
            
            Previous Heart Problems:
            <div>
              <label onChange={(e) => setPrevious(e.target.value)}>

                <input type="radio" name="previous" value="1" />
                Yes

                <input type="radio" name="previous" value="0" />
                No
              </label>
            </div>
            
            Medication Use:
            <div>
              <label onChange={(e) => setMeds(e.target.value)}>

                <input type="radio" name="medication" value="1" />
                Yes

                <input type="radio" name="medication" value="0" />
                No
              </label>
            </div>
            
            <label onChange={(e) => setStress(e.target.value)}>
            Stress Level:
            <div>

                <input type="radio" name="stress" value="1" />1
                <input type="radio" name="stress" value="2" />2
                <input type="radio" name="stress" value="3" />3
                <input type="radio" name="stress" value="4" />4
                <input type="radio" name="stress" value="5" />5
                <input type="radio" name="stress" value="6" />6
                <input type="radio" name="stress" value="7" />7
                <input type="radio" name="stress" value="8" />8
                <input type="radio" name="stress" value="9" />9
                <input type="radio" name="stress" value="10" />
                10
            </div>
              </label>
            
            <label onChange={(e) => setSedentary(e.target.value)}>
            Sedentary Hours Per Day:
            <div>
            <input type="number" name="sedentary" /> 
            </div>
            </label>
            <label onChange={(e) => setBMI(e.target.value)}>
            BMI:
            <div>
            <input type="number" name="bmi" />
            </div>
            </label>
            <label onChange={(e) => setTri(e.target.value)}>
            
            Triglycerides:
            <div>
            <input type="number" name="triglycerides" />
            </div>
            </label>
            
            <label onChange={(e) => setPhysical(e.target.value)}>
            Physical Activity Days Per Week:
            <div>
            <input type="number" name="physicaldays" />
            </div>
            </label>
            
            <label onChange={(e) => setSleep(e.target.value)}>
            Sleep Hours Per Day:
        <div>            
            <input type="number" name="sleep" />
            </div>
            </label>
          
          <button onClick={handleSubmit}>Submit</button>
        </div>}
      </div>
    )
}

export default Home;