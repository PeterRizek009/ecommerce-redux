import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store/dataSlice'
import Navbar from './components/navbar/nav';
import { Routes, Route } from "react-router-dom";
import InsertData from './components/insertdata/insertData';
import Shopping from './components/shopping/shopping';
import Cart from './components/cart/cart';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Footer from './components/footer/footer';


function App() {


  const dispatch = useDispatch();

  const globalState = useSelector((state) => state)



  useEffect(() => {
    dispatch(getData())
  }, [dispatch])







  return (
    <div className={globalState.darkmode ? 'App dark  bg-[#5c175c] text-white' : 'App  bg-white text-black'}>
      {/* {
        globalState.data.loading ?
          (
            <Loading/>
          )
          :
          ( */}
      <>
        <Navbar />
        
        <Routes>
          <Route path="" element={<Shopping globalState={globalState} />} />
          <Route path="/insert" element={<InsertData />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </>
      {/* )
      } */}

    </div>
  );
}

export default App;
