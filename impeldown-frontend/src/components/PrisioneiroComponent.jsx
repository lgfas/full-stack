import React, { useEffect, useState } from 'react'
import { atualizarPrisioneiro, buscarPrisioneiroPorId, cadastrarPrisioneiro } from '../services/PrisioneiroService'
import { useNavigate, useParams } from 'react-router-dom';

const PrisioneiroComponent = () => {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [nivelPerigo, setNivelPerigo] = useState('')
  const [crime, setCrime] = useState('')
  const [nivelSeguranca, setNivelSeguranca] = useState('')

  const {id} = useParams();

  const [errors, setErrors] = useState({
    nome: '',
    idade: '',
    nivelPerigo: '',
    crime: '',
    nivelSeguranca: ''
  }) 

  const navigator = useNavigate();

  useEffect(() => {

    if(id) {
      buscarPrisioneiroPorId(id).then((response) => {
        setNome(response.data.nome);
        setIdade(response.data.idade);
        setNivelPerigo(response.data.nivelPerigo);
        setCrime(response.data.crime);
        setNivelSeguranca(response.data.nivelSeguranca);
      }).catch(error => {
        console.error(error);
      })
    }

  }, [id])

  function salvarOuAtualizarPrisioneiro(e) {
    e.preventDefault();

    if (validarFormulario()) {
      const prisioneiro = {
        nome,
        idade,
        nivelPerigo,
        crime,
        nivelSeguranca
      };
  
      console.log(prisioneiro);

      if(id) {
        atualizarPrisioneiro(id, prisioneiro).then((response) => {
          console.log(response.data);
          navigator('/prisioneiros');
        }).catch((error) => {
          console.error(error);
        });
      } else {
        cadastrarPrisioneiro(prisioneiro).then((response) => {
          console.log(response.data);
          navigator('/prisioneiros');
        }).catch((error) => {
          console.error(error);
        }); 
      }
    }
  }

  function validarFormulario() {
    let valid = true;
    const errorsCopy = {... errors}

    if (nome.trim()) {
      errorsCopy.nome = '';
    } else {
      errorsCopy.nome = 'Campo obrigatorio';
      valid = false;
    }

    if (idade.trim()) {
      errorsCopy.idade = '';
    } else {
      errorsCopy.idade = 'Campo obrigatorio';
      valid = false;
    }

    if (nivelPerigo.trim()) {
      errorsCopy.nivelPerigo = '';
    } else {
      errorsCopy.nivelPerigo = 'Campo obrigatorio';
      valid = false;
    }

    if (crime.trim()) {
      errorsCopy.crime = '';
    } else {
      errorsCopy.crime = 'Campo obrigatorio';
      valid = false;
    }

    if (nivelSeguranca.trim()) {
      errorsCopy.nivelSeguranca = '';
    } else {
      errorsCopy.nivelSeguranca = 'Campo obrigatorio';
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function tituloPagina() {
    if (id) {
      return <h2 className='text-center'>Atualizar Prisioneiro</h2>
    } else {
      return <h2 className='text-center'>Adicionar Prisioneiro</h2>
    }
  }

  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {
            tituloPagina()
          }
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label className="form-label">Nome:</label>
                <input 
                  type="text"
                  placeholder='Nome do Prisioneiro'
                  name='nome'
                  value={nome}
                  className={`form-control ${ errors.nome ? 'is-invalid': ''}`}
                  onChange={(e) => setNome(e.target.value)}
                 />
                 {errors.nome && <div className='invalid-feedback'> { errors.nome}</div> }
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Idade:</label>
                <input 
                  type='text'
                  placeholder='Idade do Prisioneiro'
                  name='idade'
                  value={idade}
                  className={`form-control ${ errors.idade ? 'is-invalid': ''}`}
                  onChange={(e) => setIdade(e.target.value)}
                 />
                 {errors.idade && <div className='invalid-feedback'> { errors.idade}</div> }
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Nivel de Perigo:</label>
                <input 
                  type='text'
                  placeholder='Nivel de Perigo do Prisioneiro'
                  name='nivelPerigo'
                  value={nivelPerigo}
                  className={`form-control ${ errors.nivelPerigo ? 'is-invalid': ''}`}
                  onChange={(e) => setNivelPerigo(e.target.value)}
                 />
                 {errors.nivelPerigo && <div className='invalid-feedback'> { errors.nivelPerigo}</div> }
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Crimes</label>
                <input 
                  type='text'
                  placeholder='Crimes do Prisioneiro'
                  name='crime'
                  value={crime}
                  className={`form-control ${ errors.crime ? 'is-invalid': ''}`}
                  onChange={(e) => setCrime(e.target.value)}
                 />
                 {errors.crime && <div className='invalid-feedback'> { errors.crime}</div> }
              </div>

              <div className="form-group mb-2">
                <label className="form-label">NIvel de Seguranca:</label>
                <input 
                  type='text'
                  placeholder='Nivel de Seguranca do Prisioneiro'
                  name='nivelSeguranca'
                  value={nivelSeguranca}
                  className={`form-control ${ errors.nivelSeguranca ? 'is-invalid': ''}`}
                  onChange={(e) => setNivelSeguranca(e.target.value)}
                 />
                 {errors.nivelSeguranca && <div className='invalid-feedback'> { errors.nivelSeguranca}</div> }
              </div>

              <button className='btn btn-success' onClick={salvarOuAtualizarPrisioneiro}>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrisioneiroComponent