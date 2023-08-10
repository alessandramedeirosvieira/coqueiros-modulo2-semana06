import { useState } from "react"

function Formulario({ handleSubmit }) {

    const [form, setForm] = useState()

    const handleChange = (event) => {
        setForm(event.target.value)
    }

    const criarTarefa = (event) => {
        event.preventDefault()
        handleSubmit(form)
    }

    return (
        <form onSubmit={criarTarefa}>
            <input value={form} 
                onChange={handleChange}
                placeholder="Digite uma nova tarefa" 
                type="text"/>

            <button type="submit">Criar Tarefa</button>
        </form>
    )
}

export default Formulario

//exemplo de formulário
//const Form = () => {
//  return (
//   <div> 
//       <form>
//          <div>
//              <label htmlFor="name">Nome:</label>
//              <input type="text" name="name" placeholder="Digite a seu nome" />
//           </div>
//            input type="submit" value="Enviar" />
//
//        </form>
//    </div>
//)
//}
//}