import Button from './Button';
import SayName from './SayName';
import Perfil from './Perfil';
import Title from './Title';
function App() {

    const lista_pessoas = [
      {
        nome:"Karen",
        idade:"18",
        foto:"https://picsum.photos/600",
      },
      {
        nome:"Igor",
        idade:"18",
        foto:"https://picsum.photos/600",
      },


    ];

  return(
    <div>
      <Title />
      <SayName />
      <Perfil />

      { lista_pessoas.map( (pessoa) => {
        return <Perfil 
                    foto={pessoa.foto} 
                    nome={pessoa.nome}
                    idade={pessoa.idade}
                />
      } ) }

    </div>
    
  );
}

export default App;