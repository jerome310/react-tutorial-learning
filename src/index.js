import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX  

function Greeting() {
  return (
    <div>
      <h4>Hello Jsx my name is Jerome Young</h4>
    </div>
  )
}

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }

ReactDom.render(<Greeting/>, document.getElementById('root'));