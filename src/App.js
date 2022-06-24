import ComponentPure from './component/pureComponent';
import ClickCounter from './component/clickCounter';
import MouseHover from './component/mouseHover';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Pure Component</h1>
     <ol>
      <li> It is greatly used to enhance the performance of a web application.</li>
      <li>It renders the same output for the same state and props.  </li>
      <li>When you use pure components, comparing states and props will consume memory storage.</li>
     </ol>
     <ComponentPure/>
     <hr/>
     <h1>Higher Order Component</h1>
   <ol>
    <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic. </li>
    <li>Concretely, a higher-order component is a function that takes a component and returns a new component.</li>
    <li> In Higer Order Component we can use same functionality in different different Component.</li>
   </ol>
   <ClickCounter/>
   <MouseHover/>
   
    </div>
  );
}

export default App;