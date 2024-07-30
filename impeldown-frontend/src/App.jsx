import './App.css'
import BuscarPrisioneirosComponent from './components/BuscarPrisioneirosComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PrisioneiroComponent from './components/PrisioneiroComponent'

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
        {/* // http://localhost:3000/adicionar-prisioneiro */}
        <Route path='/adicionar-prisioneiro' element = {<PrisioneiroComponent/>}></Route>
        {/* // http://localhost:3000/atualizar-prisioneiro/1 */}
        <Route path='/atualizar-prisioneiro/:id' element = {<PrisioneiroComponent/>}></Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
