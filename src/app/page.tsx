"use client"
import { useState } from "react";
import styles from "~/styles/homepage.module.css";


const userList = [
    {
        name:"Paulo",
        age:20,
        id:1
    },
    {
        name:"Nicole",
        age:23,
        id:2
    },
    {
        name:"Pedro",
        age:570,
        id:3
    },
];

export default function Homepage(){
    const [flag, setFlag] = useState(false);
    function handleClick(){
        setFlag(!flag);
    }

    return(
        <main className={styles.main}>
            <h1>Aulas React - Renderizações</h1>

            <button onClick={handleClick}>Mostrar conteudo</button>
            <ul>
            {userList.map((user)=>{
                return (
                    <li key={user.id}>
                        <span> Nome: {user.name}</span>
                        <span> Idade: {user.age}</span>
                        <span> Id: {user.id}</span>
                    </li>
                )
            })}
            </ul>
            
            {!flag && <span>Conteudo</span>}
            {flag && <span>Sem conteúdo</span>}
            {/*flag? <span>Conteudo Exibido</span> : <span> Sem conteudo</span>*/}
        </main>
    )
}