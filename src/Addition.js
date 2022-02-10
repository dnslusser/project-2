const Addition = (props) => {
  console.log(props);

  return (
    <>
      <h2>
        {props.numberOne} + {props.numberTwo} = {props.numberOne + props.numberTwo}
      </h2>
    </>
  );
};

export default Addition;