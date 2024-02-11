import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={require("./HeartCompass_Logo_Design.jpg")} width="400" />
      <form className="info">
        <label>
          Name:
          <div>
            <input type="text" name="name" />
          </div>
          Age:
          <div>
            <input type="number" name="age" />
          </div>
          Sex:
          <div>
            <label>
              <input type="radio" name="sex" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="sex" value="female" />
              Female
            </label>
          </div>
          Cholesterol:
          <div>
            <input type="number" name="cholesterol" />
          </div>
          Blood Pressure:
          <div>
            <input type="text" name="bloodpressure" />
          </div>
          Heart Rate:
          <div>
            <input type="number" name="heartrate" />
          </div>
          Diabetes:
          <div>
            <label>
              <input type="radio" name="diabetes" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="diabetes" value="no" />
              No
            </label>
          </div>
          Family History:
          <div>
            <label>
              <input type="radio" name="familyhistory" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="familyhistory" value="no" />
              No
            </label>
          </div>
          Smoking:
          <div>
            <label>
              <input type="radio" name="smoking" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="smoking" value="no" />
              No
            </label>
          </div>
          Obesity:
          <div>
            <label>
              <input type="radio" name="obesity" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="obesity" value="no" />
              No
            </label>
          </div>
          Alcohol Consumption:
          <div>
            <label>
              <input type="radio" name="alcohol" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="alcohol" value="no" />
              No
            </label>
          </div>
          Exercise Hours Per Week:
          <div>
            <input type="number" name="exercise" />
          </div>
          Diet:
          <div>
            <label>
              <input type="radio" name="diet" value="average" />
              Average
            </label>
            <label>
              <input type="radio" name="diet" value="unhealthy" />
              Unhealthy
            </label>
            <label>
              <input type="radio" name="diet" value="healthy" />
              Healthy
            </label>
          </div>
          Previous Heart Problems:
          <div>
            <label>
              <input type="radio" name="previous" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="previous" value="no" />
              No
            </label>
          </div>
          Medication Use:
          <div>
            <label>
              <input type="radio" name="medication" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="medication" value="no" />
              No
            </label>
          </div>
          Stress Level:
          <div>
            <label>
              <input type="radio" name="stress" value="1" />1
            </label>
            <label>
              <input type="radio" name="stress" value="2" />2
            </label>
            <label>
              <input type="radio" name="stress" value="3" />3
            </label>
            <label>
              <input type="radio" name="stress" value="4" />4
            </label>
            <label>
              <input type="radio" name="stress" value="5" />5
            </label>
            <label>
              <input type="radio" name="stress" value="6" />6
            </label>
            <label>
              <input type="radio" name="stress" value="7" />7
            </label>
            <label>
              <input type="radio" name="stress" value="8" />8
            </label>
            <label>
              <input type="radio" name="stress" value="9" />9
            </label>
            <label>
              <input type="radio" name="stress" value="10" />
              10
            </label>
          </div>
          Sedentary Hours Per Day:
          <div>
            <input type="number" name="sedentary" />
          </div>
          BMI:
          <div>
            <input type="number" name="bmi" />
          </div>
          Triglycerides:
          <div>
            <input type="number" name="triglycerides" />
          </div>
          Physical Activity Days Per Week:
          <div>
            <input type="number" name="physicaldays" />
          </div>
          Sleep Hours Per Day:
          <div>
            <input type="number" name="sleep" />
          </div>
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
