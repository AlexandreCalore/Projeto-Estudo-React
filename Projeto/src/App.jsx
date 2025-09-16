
import { BrouseRouter, Routes, Route } from "react-router-dom" // Instalado componentes e importados para trabalharmos como 

import Titulo from './Titulo.jsx' // Aqui, criamos um componente personalizado, para trabalhar com ele como se fosse uma tag, contendo dentro dele outras tags específicas de acordo com a nossa necessidade
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";


function App(){ //Retonarmos por meio de função, tudo aquilo que será incorporado no HTML -> na sua class'root'.
  return ( //Aqui utilizei aquele componente criado pos nós mesmos, em forma de tag, exibindo na tela tudo o que nele possuí. 

    // Se formos utiliza-lo mais de uma vez, deve-se então usar esses comandos conforme abaixo: 
    <div>
      <BrousetRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Contato' element={<Contato />} />
        </Routes>
      </BrousetRouter>
      <Home />
      <Titulo nomeProps={"Alexandre"} />
      <Titulo nomeProps={"Calore"}/> 
      <Titulo nomeProps={"Props"}/> 
      <Titulo/> 
    </div> 

    // Do contrário, somente printar uma tag
    //<Titulo/>

    //Podemos também trabalhar com parâmetros + if/else com estes parâmetros. No caso do titulo, podemos definir o nome a aparecer, e no caso de nao aparecer, trabalhando com if/else, ele vai printar outra coisa.
  )
} 

export default App //Necessário para exporta-lo para a main