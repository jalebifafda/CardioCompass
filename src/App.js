import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="info">
        <label>
          Name:
          <input type="text" name="name" />
          <br></br>
          Age:
          <input type="number" name="age" />
          <br></br>
          Sex:
          <form>
            <label>
              <input type="radio" name="sex" value="male" />
              Male
            </label>
            <label>
              <input type="radio" name="sex" value="female" />
              Female
            </label>
          </form>
          <br></br>
          Cholesterol:
          <input type="number" name="cholesterol" />
          <br></br>
          Blood Pressure:
          <input type="text" name="bloodpressure" />
          <br></br>
          Heart Rate:
          <input type="number" name="heartrate" />
          <br></br>
          Diabetes:
          <form>
            <label>
              <input type="radio" name="diabetes" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="diabetes" value="no" />
              No
            </label>
          </form>
          <br></br>
          Family History:
          <form>
            <label>
              <input type="radio" name="familyhistory" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="familyhistory" value="no" />
              No
            </label>
          </form>
          <br></br>
          Smoking:
          <form>
            <label>
              <input type="radio" name="smoking" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="smoking" value="no" />
              No
            </label>
          </form>
          <br></br>
          Obesity:
          <form>
            <label>
              <input type="radio" name="obesity" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="obesity" value="no" />
              No
            </label>
          </form>
          <br></br>
          Alcohol Consumption:
          <form>
            <label>
              <input type="radio" name="alcohol" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="alcohol" value="no" />
              No
            </label>
          </form>
          <br></br>
          Exercise Hours Per Week:
          <input type="number" name="exercise" />
          <br></br>
          Diet:
          <form>
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
          </form>
          <br></br>
          Previous Heart Problems:
          <form>
            <label>
              <input type="radio" name="previous" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="previous" value="no" />
              No
            </label>
          </form>
          <br></br>
          Medication Use:
          <form>
            <label>
              <input type="radio" name="medication" value="yes" />
              Yes
            </label>
            <label>
              <input type="radio" name="medication" value="no" />
              No
            </label>
          </form>
          <br></br>
          Stress Level:
          <form>
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
          </form>
          <br></br>
          Sedentary Hours Per Day:
          <input type="number" name="sedentary" /> <br></br>
          BMI:
          <input type="number" name="bmi" />
          <br></br>
          Triglycerides:
          <input type="number" name="triglycerides" />
          <br></br>
          Physical Activity Days Per Week:
          <input type="number" name="physicaldays" />
          <br></br>
          Sleep Hours Per Day:
          <input type="number" name="sleep" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
