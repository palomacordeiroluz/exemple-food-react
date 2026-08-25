import { useState,useEffect } from "react"


const Tarefas = () => {
    //hook- useState
    const [tarefas, setTarefas]=useState(()=>{
        //LOCALSTORAGE
    const salvarTarefa = localStorage.getItem("item-tarefa");
    return salvarTarefa ? JSON.parse(salvarTarefa):[];

    });
    const [campo, setCampo]=useState("");
    //HOOK useEffect - realiza o efeito colateral, no exemplo, 
    // ao cadastrar a tarefa aparece automaticamente na tela

    useEffect(()=>{
        localStorage.setItem("item-tarefa", JSON.stringify(tarefas));
    },[tarefas])

    //funcao adicionar tarefa

    const AdicionarTarefas=()=>{
        setTarefa()
    }

    return (
        <>
        </>
    )
}


export default Tarefas
