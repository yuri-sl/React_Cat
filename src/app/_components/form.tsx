import {type ChangeEvent, useState, type FormEvent} from "react";
import styles from "~/styles/homepage.module.css";

export function Form(){
    const [formData,setFormData] = useState({
        email: "",
        nome: "",
        senha: "",
    })

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        console.log("Vc submeteu o func.");
        console.log(formData);
    }

    function handleChangeForm(event: ChangeEvent<HTMLInputElement>){
        setFormData({...formData, [event.target.name]:event.target.value})
    }
    return (
        <form className="styles.form" onSubmit={handleSubmit}>
        <input onChange={handleChangeForm} className={styles.input} type="email" placeholder="digite seu email" name="email"/>
        <input onChange={handleChangeForm} className={styles.input} type="text" placeholder="digite seu nome" name="nome"/>
        <input onChange={handleChangeForm} className={styles.input} type="password" placeholder="digite sua senha" name="senha"/>
        <button type="submit" className={styles.button}> Cadastrar </button>



    </form>

    );
}