
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  const count = useSelector(state => state.counter.count)
  //stateRedux => call reducer => state's reducer
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className='text-center'>Hello world</div>
      <div>Count ={count}</div>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    </div>
  );
}

export default App;
