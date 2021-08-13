import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './components/HelloComponent';
import StateFullComponent from './containers/StateFullComponent'

// const HelloComponent = () => {
//   return <p>Hello Function Component</p>
// }

// class StateFullComponent extends React.Component {
//   render(){
//     return <p>Hello StateFull Component</p>
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <HelloComponent/>
    <StateFullComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
