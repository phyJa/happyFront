import React from 'react';

interface titleProps {

  text: string;

}

function Title(props: titleProps) {
  return <h1> Here is title {props.text} </h1>;
}

function App() {
  return (
    <div className="App">
      <Title text="1" />
      <Title text="2" />
      <Title text="3" />
    </div>
  );
}

export default App;
