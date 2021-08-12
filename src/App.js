import logo from './logo.svg';
import './App.css';

import Welcome from './mycomponents/Welcome.js';
import Mybtn from './mycomponents/ButtonComponent.js';
import FunctWithBtstrap from './mycomponents/BootstrapshohoComponent';
import Arrow from './mycomponents/Arrow';
import ForceUpdate from './mycomponents/ForceUpdate';
import Reactdom from './mycomponents/Reactdom';
import Form from './mycomponents/Form';
import Signup from './Signup';
import Text from './mycomponents/Text';
import Select from './mycomponents/Select';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>jsx also supports js code within the these html-like tags. for example lets add 2+3.
            the output will be {2 + 3}</p>
        </p>
        <Select></Select>
        <Text></Text>
        <Signup></Signup>
        <Form></Form>
        <Reactdom></Reactdom>
        <Mybtn name="ananya"></Mybtn> {/* name ta holo props, java er method parameter er moto  */}
        <Mybtn name="ritu"></Mybtn>
        <Mybtn name="bleep"></Mybtn>
        <Welcome name="class 1"></Welcome>
        {/*<Welcome name="class 2"></Welcome>*/}
        <ForceUpdate></ForceUpdate>
        {/*<FunctWithBtstrap></FunctWithBtstrap>
        <Arrow></Arrow>*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
