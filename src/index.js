import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="title">todos</div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
