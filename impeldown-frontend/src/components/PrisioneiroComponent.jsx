import React, { useState } from 'react'
import { cadastrarPrisioneiro } from '../services/PrisioneiroService'
import { useNavigate } from 'react-router-dom';

const PrisioneiroComponent = () => {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [nivelPerigo, setNivelPerigo] = useState('')
  const [crime, setCrime] = useState('')
  const [nivelSeguranca, setNivelSeguranca] = useState('')

  const navigator = useNavigate();

  function salvarPrisioneiro(e) {
    e.preventDefault();

    const prisioneiro = {
      nome,
      idade,
      nivelPerigo,
      crime,
      nivelSeguranca
    };

    console.log(prisioneiro);

    cadastrarPrisioneiro(prisioneiro).then((response) => {
      console.log(response.data);
      navigator('/prisioneiros')
    });
  }

  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className="text-center">Adicionar Prisioneiro</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label className="form-label">Nome:</label>
                <input 
                  type="text"
                  placeholder='Nome do Prisioneiro'
                  name='nome'
                  value={nome}
                  className='form-control'
                  onChange={(e) => setNome(e.target.value)}
                 />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Idade:</label>
                <input 
                  type='text'
                  placeholder='Idade do Prisioneiro'
                  name='idade'
                  value={idade}
                  className='form-control'
                  onChange={(e) => setIdade(e.target.value)}
                 />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Nivel de Perigo:</label>
                <input 
                  type='text'
                  placeholder='Nivel de Perigo do Prisioneiro'
                  name='nivelPerigo'
                  value={nivelPerigo}
                  className='form-control'
                  onChange={(e) => setNivelPerigo(e.target.value)}
                 />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Crimes</label>
                <input 
                  type='text'
                  placeholder='Crimes do Prisioneiro'
                  name='crime'
                  value={crime}
                  className='form-control'
                  onChange={(e) => setCrime(e.target.value)}
                 />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">NIvel de Seguranca:</label>
                <input 
                  type='text'
                  placeholder='Nivel de Seguranca do Prisioneiro'
                  name='nivelSeguranca'
                  value={nivelSeguranca}
                  className='form-control'
                  onChange={(e) => setNivelSeguranca(e.target.value)}
                 />
              </div>

              <button className='btn btn-success' onClick={salvarPrisioneiro}>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrisioneiroComponent