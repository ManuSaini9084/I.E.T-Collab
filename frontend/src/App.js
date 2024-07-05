import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import StudentPanel from './components/StudentPanel';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home';
import Academic from './components/Academics/Academic';
import Header from './components/Header';
import Paper from './components/Academics/Paper';
import Syllabus from './components/Academics/Syllabus';
import Notes from './components/Academics/Notes';
import Branch from './components/Academics/Branches';
import Breadcrumbs from './components/Academics/Breadcrumbs';
import ComingSoon from './components/Academics/ComingSoon';
import './index.css';
import Footer from './components/Footer';
import {useState , useEffect} from "react"
import SplashScreen from "./components/SplashScreen/Splash"
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulate a loading delay
      const timer = setTimeout(() => {
          setLoading(false);
      }, 3000); // Adjust the delay as needed

      return () => clearTimeout(timer);
  }, []);

  return (loading) ? (<SplashScreen/>) : (
    <div className="App">
      <Header />
      <Breadcrumbs/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/academics" element={<Academic />} />
        <Route path="/academics/paper" element={<Paper />} />
        <Route path="/academics/syllabus" element={<Syllabus />} />
        <Route path="/academics/notes" element={<Notes />} />
        <Route path="/academics/paper/:branch" element={<Branch />} />
        <Route path="/academics/notes/:branch" element={<Branch />} />
        <Route path="/academics/syllabus/:branch" element={<Branch />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
