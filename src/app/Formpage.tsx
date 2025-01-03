"use client"
import styles from "~/styles/homepage.module.css"
import { type ChangeEvent, useState, type FormEvent } from "react";
import { Form } from "./_components/form";

/*HookForm*/
export default function Homepage(){



    function handleClick(){
        alert("hello world");
    }

    function handleChangeExemplo(event: ChangeEvent<HTMLInputElement>){
        console.log(event.target.value);
        console.log(event.target.name);
    }
    return (
        <main className={styles.main}>
            <h1>Aulas React - Eventos</h1>

            <button className={styles.button} onClick={handleClick}>
                Exibe alert
            </button>

            <input 
            className={styles.input} 
            type="text" 
            placeholder="name" 
            onChange={handleChangeExemplo}
            name="nome"
            />
            <Form />
        </main>
    );
}