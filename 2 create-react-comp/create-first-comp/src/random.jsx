function Random() {
  let number=Math.round(Math.random()*100);
  return <h1 style={{'background-color':'Green'}}>
    Random number is {number}
    </h1>
}

export default Random;