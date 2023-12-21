import react, { useState } from "react";
import styles from "./InterestForm.module.css";
import Button from "../UI/Button";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  " duration": 10,
};

const InterestForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler");
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    console.log("resetHandler");
    setUserInput(initialUserInput);
  };
  const changeHandler = (input, value) => {
    console.log(input, value);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>

        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>

        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => changeHandler("duration", event.target.value)}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <Button onClick={resetHandler} className="buttonAlt" type="reset">
          Reset
        </Button>
        <Button type="submit">Calculate</Button>
      </p>
    </form>
  );
};
export default InterestForm;
