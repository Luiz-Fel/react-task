import React, { useEffect, useState } from 'react';
import './App.scss';
import Users from './components/Users';

function App() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  const previous = () => {
    if (page === 0) {
      setDisabled(true);
    } else {
      setPage(page - 10);
    }
  };

  const next = () => {
    setPage(page + 10);
  };


  useEffect(() => {
    setLoading(true);
    fetch(`https://give-me-users-forever.vercel.app/api/users/${page}/next`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.users);
        setLoading(false);
        console.log(data.users)
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
        <button onClick={previous} className={` ${disabled || page === 0 ? 'disabled' : ''}`}>
          Previous
        </button>
        <button onClick={next} className={` ${disabled ? 'disabled' : ''}`}>
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
            <Users
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
