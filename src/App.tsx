import React, { useEffect, useState } from 'react';
import './App.scss';
import User from './components/User';

function App() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);

  const previous = () => {
    if (page === 0) {
      setPrevDisabled(true);
    } else {
      setPage(page - 10);
    }
  };

  const next = () => {
    setPage(page + 10);
    setPrevDisabled(false);
  };


  useEffect(() => {
    setLoading(true);
    fetch(`https://give-me-users-forever.vercel.app/api/users/${page}/next`)
      .then((res) => res.json())
      .then((data) => {
        if (data.users.length === 0) {
          setNextDisabled(true);
        } else {
          setData(data.users.slice(0, 10));
          if (page === 0) {
            setPrevDisabled(true);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="App">
     <header>
      <h1>React Task</h1>
      <div className='button-display'>
        <button onClick={previous} disabled={prevDisabled} >
          Previous
        </button>
        <button onClick={next} disabled={nextDisabled}>
          Next
        </button>
      </div>
     </header>
      <div className="container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          data &&
          data.map((user: any) => (
            <User
              key={user.ID}
              id={user.ID}
              firstNameLastName={user.FirstNameLastName}
              email={user.Email}
              phone={user.Phone}
              company={user.Company}
              jobTitle={user.JobTitle}
            />
        )))}
        </div>
    </div>
  );
}

export default App;
