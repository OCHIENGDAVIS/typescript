import { useState } from 'react';

const GeustList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuest] = useState<string[]>([]);
  const onClick = () => {
    setName('');
    setGuest([...guests, name]);
  };
  return (
    <div>
      <h3>Guest list</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest </button>
    </div>
  );
};

export default GeustList;
