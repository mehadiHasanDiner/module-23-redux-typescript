// user={name="something", age="30" , hobbies=['football','cricket','gaming']}

import { useState } from 'react';

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: '', age: '0', hobbies: [] });

  console.log(user);

  return (
    <div>
      <form>
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border border-purple-600 m-2 p-2 rounded-md"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          className="border border-purple-600 m-2 p-2 rounded-md"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
          onBlur={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
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

export default UserInfoWithUseState;
