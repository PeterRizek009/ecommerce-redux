import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store/dataSlice'
import Navbar from './components/navbar/nav';
import { Routes, Route } from "react-router-dom";
import InsertData from './components/insertdata/insertData';
import Shopping from './components/shopping/shopping';
import Cart from './components/cart/cart';


function App() {

  // eslint-disable-next-line react-hooks/exhaustive-deps

  // const getData = useCallback(async () => {
  //   await axios.request(
  //     {
  //       method: 'GET',
  //       url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
  //       params: {
  //         country: 'us',
  //         lang: 'en',
  //         currentpage: '0',
  //         pagesize: '30',
  //         categories: 'men_all',
  //         concepts: 'H&M MAN'
  //       },
  //       headers: {
  //         'X-RapidAPI-Key': '8706630ab5mshf3e9e2dba093881p114d78jsn3b69bb0ba508',
  //         'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  //       }
  //     })
  //     .then(response => {
  //       setData(response.data.results);
  //     }).catch(error => console.log(error))
  // }, [])




  // useEffect(() => {
  //   getData();
  // }, [getData])


  const dispatch = useDispatch();

  const globalState = useSelector((state) => state)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])




  return (
    <div className="App">
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
          <Route path="/" element={<Shopping globalState={globalState} />} />
          <Route path="/insert" element={<InsertData />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
      {/* )
      } */}

    </div>
  );
}

export default App;
