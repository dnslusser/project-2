const Addition = (props) => {
  console.log(props);

  return (
    <h2>
      Hello! {props.numberOne}
    </h2>
  );
};

export default Addition;