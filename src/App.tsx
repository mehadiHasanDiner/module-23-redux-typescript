import { useState } from 'react';
import './App.css';
// import CounterWithFuncComponent from './components/CounterWithFuncComponent';
// import UserInfoWithUseState from './components/UserInfoWithUseState';
// import UserInfoWithUseReducer from './components/UserInfoWithUseReducer';
import TodoProvider from './context/TodoProvider';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <TodoProvider>
      <div className="border border-purple-500 p-10 m-10">
        {/* <CounterWithClass />
      <h1 className='text-3xl'>Count = {count}</h1>
      <CounterWithFuncComponent count={count} setCount={setCount} /> */}
        {/* <UserInfoWithUseState /> */}

        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
