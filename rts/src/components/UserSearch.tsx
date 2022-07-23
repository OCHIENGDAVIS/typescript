import { useState, useRef, useEffect } from 'react';
const users = [
  { name: 'sarah', age: 20 },
  { name: 'alex', age: 20 },
  { name: 'mike', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    console.log(foundUser);
    setUser(foundUser);
  };
  return (
    <div>
      <input
        ref={inputRef}
        name={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
