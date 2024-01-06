import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}> {props.label}</label>
      {/* 요소에 전개연산자 사용하기 편리한 방법 {...props.input} */}
      <input {...props.input} />
    </div>
  );
};
export default Input;
