const Button = (props) => {
  return (
    <button disabled={props.activity} onClick={props.click}>
      {props.text}
    </button>
  );
};
export default Button;
