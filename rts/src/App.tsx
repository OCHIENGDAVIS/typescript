import { Child } from './components/Child.component';
import { ChildAsFC } from './components/Child.component';
import GeustList from './components/GuestList';
import UserSearch from './components/UserSearch';
import EventComponent from './components/EventComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Child color="red" onClick={() => console.log('clicked')} />
      <ChildAsFC color="red" onClick={() => console.log('clicked')} />
      <GeustList />
      <UserSearch />
      <EventComponent />
    </div>
  );
}

export default App;
