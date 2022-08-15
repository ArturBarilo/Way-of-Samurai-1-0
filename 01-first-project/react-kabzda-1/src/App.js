import React from 'react';
import './App.css';




const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn' />
      </header>
      <nav className='nav'>
        <div>
          <a href=''>Profile</a>
        </div>
        <div>
          <a href=''>Mesages</a>
        </div>
        <div>
          <a href=''>News</a>
        </div>
        <div>
          <a href=''>Music</a>
        </div>
        <div>
          <a href=''>Settings</a>
        </div>
      </nav>

      <div className='content'>
        <div>
          <img src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg'/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
