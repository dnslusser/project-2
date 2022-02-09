const Addition = (props) => {
  console.log(props);

  return (
    <>
      <h2>
        Hello! {props.numberOne}
      </h2>
      <h3>
        {props.numberOne} + {props.numberTwo} = {props.numberOne + props.numberTwo}
      </h3>
    </>
  );
};

export default Addition;