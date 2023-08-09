function ToDo (props){
    const props2 =[
        "tarefa 1",
        "tarefa 2"
    ]
    return (
        <>
        <ul>
            {props2.map(item => {
                return <li key={item}></li>
            })}
        </ul>
        </>
    )
}
export default ToDo