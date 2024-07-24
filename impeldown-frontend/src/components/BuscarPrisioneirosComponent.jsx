import React, {useEffect, useState} from 'react'
import buscarPrisioneiros from '../services/PrisioneiroService';

const BuscarPrisioneirosComponent = () => {

  const [prisioneiros, setPrisioneiros] = useState([])

  useEffect(() => {
    buscarPrisioneiros().then((response) => {
      setPrisioneiros(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, [])

  return (
    <div className='container'>
      <h2 className='text-center'>Lista de Prisioneiros</h2>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Nivel de Perigo</th>
            <th>Crime</th>
            <th>Nivel de Seguranca</th>
          </tr>
        </thead>
        <tbody>
          {
            prisioneiros.map(prisioneiro =>
              <tr key={prisioneiro.nome}>
                <td>{prisioneiro.nome}</td>
                <td>{prisioneiro.idade}</td>
                <td>{prisioneiro.nivelPerigo}</td>
                <td>{prisioneiro.crime}</td>
                <td>{prisioneiro.nivelSeguranca}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default BuscarPrisioneirosComponent