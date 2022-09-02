import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile prop={props.prop}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs prop={props.prop}/>}/>
                        <Route path='/news/*' element={<News prop={props.prop}/>}/>
                        <Route path='/music/*' element={<Music prop={props.prop}/>}/>
                        <Route path='/settings/*' element={<Settings prop={props.prop}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
