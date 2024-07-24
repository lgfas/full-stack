import React, {useEffect, useState} from 'react'
import { buscarPrisioneiros } from '../services/PrisioneiroService';
import { useNavigate } from 'react-router-dom';

const BuscarPrisioneirosComponent = () => {

  const [prisioneiros, setPrisioneiros] = useState([])

  const navigator = useNavigate();

  useEffect(() => {
    buscarPrisioneiros().then((response) => {
      setPrisioneiros(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, [])

  function adicionarPrisioneiro() {
    navigator('/adicionar-prisioneiro')
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Lista de Prisioneiros</h2>

      <button className='btn btn-primary mb-2' onClick={adicionarPrisioneiro}>Adicionar Prisioneiro</button>

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