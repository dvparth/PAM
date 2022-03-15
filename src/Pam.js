import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './Pam.scss';
import { PersonActions } from './store/reducers/person/personReducer';
import { selectPersons } from './store/reducers/person/personSelector';
import { Summary } from './Summary/summary';

function Pam() {
  const dispatch = useDispatch();
  const persons = useSelector(selectPersons);
  useEffect(() => {
    console.log(process.env.REACT_APP_API_BASE_URL + 'persons');
    fetch(process.env.REACT_APP_API_BASE_URL + 'persons').then((value) => {
      value.json().then((val) => {
        dispatch({ "type": PersonActions.SET, "payload": val });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <Routes>
        <Route path='/' element={<section>This is Home Page</section>} />
        <Route path='/summary' element={<Summary />} />
      </Routes>
    </main>
  );
}

export default Pam;
