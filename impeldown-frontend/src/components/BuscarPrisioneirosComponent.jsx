import React, {useEffect, useState} from 'react'
import { buscarPrisioneiros, removerPrisioneiro } from '../services/PrisioneiroService';
import { useNavigate } from 'react-router-dom';

const BuscarPrisioneirosComponent = () => {

  const [prisioneiros, setPrisioneiros] = useState([])

  const navigator = useNavigate();

  useEffect(() => {
    buscarTodosPrisioneiros();
  }, [])

  function buscarTodosPrisioneiros() {
    buscarPrisioneiros().then((response) => {
      setPrisioneiros(response.data);
    }).catch(error => {
      console.error(error);
    })
  }

  function adicionarPrisioneiro() {
    navigator('/adicionar-prisioneiro')
  }

  function atualizarPrisioneiro(id) {
    navigator(`/atualizar-prisioneiro/${id}`)
  }

  function apagarPrisioneiro(id) {
    console.log(id);

    removerPrisioneiro(id).then((response) => {
      buscarTodosPrisioneiros();
    }).catch((error) => {
      console.error(error);
    });
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            prisioneiros.map(prisioneiro =>
              <tr key={prisioneiro.id}>
                <td>{prisioneiro.nome}</td>
                <td>{prisioneiro.idade}</td>
                <td>{prisioneiro.nivelPerigo}</td>
                <td>{prisioneiro.crime}</td>
                <td>{prisioneiro.nivelSeguranca}</td>
                <td style={{display: 'flex', gap:'10px'}}>
                  <button className='btn btn-info' onClick={() => atualizarPrisioneiro(prisioneiro.id)}>Atualizar</button>
                  <button className='btn btn-danger' onClick={() => apagarPrisioneiro(prisioneiro.id)}>Remover</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default BuscarPrisioneirosComponent