
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';


function App() {

  const x = -2;
  const y = 0;

  if( x > y ) {
    return (
      <button className='green'></button>
    )
  }else if(y > x) {
    return (
      <button className='red'></button>
    )
  }

}


var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);

