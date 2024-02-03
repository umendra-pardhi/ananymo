// import logo from './logo.svg';
import './assets/styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AskQuestion from './components/AskQuestion';



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router=createBrowserRouter([

  {
    path:'/',
    element: (
      <>
        <Header/>
        <Home/>
        <Footer/>
      </>
    )
  },
  {
    path:'/login',
    element: (
      <>
        <Header/>
        <Login/>
        <Footer/>
      </>
    )
  },
  {
    path:'/signup',
    element: (
      <>
        <Header/>
        <Signup/>
        <Footer/>
      </>
    )
  },
  {
    path:'/ask-question',
    element: (
      <>
        <Header/>
        <AskQuestion/>
        <Footer/>
      </>
    )
  },
  {
    path: '/admin',
    element: (
      <>
        <h1>
          This is admin Page
        </h1>
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <Header/>
        <About/>
        <Footer/>
      </>
    )
  }

]);



export default App;
