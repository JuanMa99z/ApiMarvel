// // key privada : f9209b61b4087afe38d656803b146372acdd8304

// // key publica : 9bbf6ffa98d1c0a6788c232a8b50bfc9

// //ts : 1

// // 1f9209b61b4087afe38d656803b146372acdd83049bbf6ffa98d1c0a6788c232a8b50bfc9

// // hash : 849afaec53ab619d1df4b8ddeebcbf33

// https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=9bbf6ffa98d1c0a6788c232a8b50bfc9&hash=849afaec53ab619d1df4b8ddeebcbf33


// // https://gateway.marvel.com:443/v1/public/characters?apikey=9bbf6ffa98d1c0a6788c232a8b50bfc9


import "./App.css"
import Characters from "./component/Characters"
import marvel from "./asset/img/logo.png"
function App(){
  return (
    <>
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
           <a className="navbar-brand" href="home">
             <img   src={marvel} alt="" width="68" height="32" className="d-inline-block align-text-top"/>
           </a>
      </div>
</nav>
    <Characters/>
    </div>
    <footer>Derechos de autor &copy; 2023 - Juan Manuel Ortega.</footer>
    </>
  )
}

export default App


// import React from 'react';
// import  MainApp  from './component/MainApp';
// import {Routes,Route} from 'react-router-dom'
// import CharInfo from './component/CharInfo';

// function App() {
//   return (
//     <>
//      <Routes>
//        <Route path='/'element={<MainApp/>}/>
//        <Route path='/:id' element={<CharInfo/>}/>
//      </Routes>
//     </>
//   )
// }

// export default App;