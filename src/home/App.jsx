import React from 'react';
import './App.css'
const reactDom = require('react-dom');


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

reactDom.render(
  <App />,
  document.getElementById('root')
);

export default App;

