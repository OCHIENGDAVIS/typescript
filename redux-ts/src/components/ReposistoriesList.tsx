import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { actionCreators } from '../redux';
import { Action } from '../redux';
import reduxThunk from 'redux-thunk';

const ReposistoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dispatch: any = useDispatch();
    dispatch(actionCreators.searchRepositories(term));
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <input type="submit" value="search " />
      </form>
    </div>
  );
};

export default ReposistoriesList;
