import { useState } from "react"

function Titulo({nomeProps}) {
    const [texto, setTexto] = useState("Um titulo do estado inicial") 
    const [InputText, setInputText] = useState("") //Trabalhando com Estados / Memórias temporárias no React

  // JSX na prática, é a unificação de JS + HTML, de forma que consiguimos trabalhar com ambos no mesmo arquivo.

  // Para exemplificar isso, vamos trabalhar com a criação e impressão de uma variável.
    function clicou(){
        setTexto(InputText)
    } 

    let nome = 'Alexandre Calore'
    const soma = 10 + 10
    const urlImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s00&h=696&hcb=2&ved=2ahUKEwjzn9z82duPAxVepJUCHewpAtsQM3oECBoQAA"

    return ( //Com o button, estamos trabalhando com estados diferentes armazenados dentro de uma const, alterando uma tag
    <div>
        <h1>{texto}</h1>
        <input type="text" value={InputText} onChange={(e) => {setInputText(e.target.value)}} />
        <button onClick={clicou}>Mudar</button> 

        <h1>Olá, eu sou um título gerado a partir do componente 'Titulo', e o nome {nome} Foi gerado a partir de uma variável, ja este nome: {nomeProps ? nomeProps : nome} Foi gerado a partir de um Props, que nada mais é do que um parâmetro passado personalizado de acordo com cada  </h1>
        <p>teste de parágrafo dentro da tag 'Titulo' usada a partir do elemento 'Titulo'. Mostrando como HTML e JS podem trabalhar juntos, usando uma const em um html por exemplo = {soma} (resultado de uma soma atribuida a uma const)</p>
        <img src={urlImg} width={100} alt="Imagem da logo do React" />  
    </div>
    ) //Tags que não possui tag de fechamento, devem ter contrabarra no final
    //Conseguimos trabalhar com interpolação até mesmo nos atributos de tag, permitindo então que o JS controle atributos por exemplo.

}


export default Titulo