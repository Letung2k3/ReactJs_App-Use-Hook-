import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<MyComponent />}>
            </Route>
            <Route path="/Home" element={<Home />}>
            </Route>
          </Routes>
          {/* <div>Count = {count}</div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
