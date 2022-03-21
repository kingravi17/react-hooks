import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import Confirm from './components/Confirm';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
import Item from './components/Item';
import NewItem from './components/NewItem';
import Featured from './components/Featured';
import User from './components/User';
import sudoUser from './sudoUser';
import UserDetails from './components/UserDetails';
import Product from './components/Product';
import First from './components/First';
import Second from './components/Second';
import Student from './components/Student';
import StudentDetailPage from './components/StudentDetailPage';
import Monitor from './components/Monitor';
function App() {
   
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>} ></Route>
        <Route path="home" element = {<Home/>} ></Route>
        <Route path="about" element = {<About/>} ></Route>
        <Route path="confirm" element = {<Confirm/>} ></Route>
        <Route path="contact" element = {<Contact/>}></Route>
        
        <Route path="/product" element = {<Product/>}>
              <Route path="first" element = {<First/>}></Route>
              <Route path="second" element = {<Second/>}></Route>
              <Route index element = {<First/>}></Route>
        </Route>
        
        <Route path="/student" element = {<Student/>}>
              <Route path=":stId" element = {<StudentDetailPage/>}></Route>
              <Route path="monitor" element = {<Monitor/>}></Route>
        </Route>
        


        
        <Route path="/item" element = {<Item/>}>
          <Route path="new" element = {<NewItem/>}></Route>
          <Route path="featured" element = {<Featured/>}></Route>
          <Route index element = {<Featured/>}></Route>
        </Route>
        <Route path="/user" element = {<User/>}>
          <Route path="sudoUser" element = {<sudoUser/>}></Route>
          <Route path=":userId" element = {<UserDetails/>}></Route>
        </Route>
        <Route path= "*" element = {<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
