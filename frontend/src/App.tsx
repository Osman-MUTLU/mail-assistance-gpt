import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from '@microsoft/mgt-react'; // import login component
import { getBearerToken, getGlobalProvider  } from './utils/Session';
import SignIn from './components/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import SendMail from './components/SendMail';
import Inbox from './components/Inbox';
import PersonAgenda from './components/PersonAgenda';
import Chat from './components/Chat';


function App() {

  React.useEffect(() => {
    getBearerToken().then((token) => {
      token ? sessionStorage.setItem('token', token) : sessionStorage.removeItem('token');
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sendMail' element={<SendMail />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/agenda' element={<PersonAgenda/>} />
          <Route path='/chat' element={<Chat/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}
export default App;