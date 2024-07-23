import React from 'react'

const BuscarPrisioneirosComponent = () => {

  const dummyData = [
    {
      "nome": "luis",
      "idade": 22,
      "nivelPerigo": "BAIXO",
      "crime": "amigo do luffy",
      "nivelSeguranca": "ESCARLATE"
    },
    {
      "nome": "gabriel",
      "idade": 20,
      "nivelPerigo": "BAIXO",
      "crime": "trabalha a tarde",
      "nivelSeguranca": "ESCARLATE"
    },
    {
      "nome": "caua",
      "idade": 20,
      "nivelPerigo": "BAIXO",
      "crime": "problema ao abrir conta no santander",
      "nivelSeguranca": "ESCARLATE"
    }
  ]

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
            dummyData.map(prisioneiro =>
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