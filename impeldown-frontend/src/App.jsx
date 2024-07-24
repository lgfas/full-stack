import './App.css'
import BuscarPrisioneirosComponent from './components/BuscarPrisioneirosComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* // http://localhost:3000 */}
        <Route path='/' element = {<BuscarPrisioneirosComponent/>}></Route>
        {/* // http://localhost:3000/prisioneiros */}
        <Route path='/prisioneiros' element = {<BuscarPrisioneirosComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
