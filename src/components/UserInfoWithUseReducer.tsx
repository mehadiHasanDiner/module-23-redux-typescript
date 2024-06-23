import { ChangeEvent, useReducer } from 'react';

const initialState = {
  name: '',
  age: '',
  hobbies: [] as string[],
};

type TAction = {
  type: string;
  payload: string;
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case 'addName':
      return { ...currentState, name: action.payload };
    case 'addAge':
      return { ...currentState, age: action.payload };
    case 'addHobby':
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: 'addName', payload: e.target.value })
          }
          className="border border-purple-600 m-2 p-2 rounded-md"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: 'addAge', payload: e.target.value })
          }
          className="border border-purple-600 m-2 p-2 rounded-md"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: 'addHobby', payload: e.target.value })
          }
          className="border border-purple-600 m-2 p-2 rounded-md"
          type="text"
          name="hobbies"
          id="hobbies"
        />

        <button className="btn btn-primary" type="submit">
          {' '}
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfoWithUseReducer;
