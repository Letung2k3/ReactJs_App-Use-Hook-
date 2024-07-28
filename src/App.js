
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="container">
      <div className='text-center'>Hello world</div>
    </div>
  );
}

export default App;
