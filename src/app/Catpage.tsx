"use client";//Permite trazer dinamicidade para a página

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "~/styles/homepage.module.css";

export default function ImagePage(){
    const [imgUrl , setImgUrl] = useState("");

    console.log("renderizou");

    useEffect(() =>{        
            fetch("https://api.thecatapi.com/v1/images/search")//fetch -> fazer requisições para uma API.
            //Retorna uma imagem aleatória de gatinhos
                .then((res) => res.json())
                .then((data) => setImgUrl(data[0].url))
                .catch((err) => alert(err));//Caso dê erro ele vai cair para o catch.

    }, [imgUrl]);

    return (
        <main className={styles.main}>
            <h1>Aulas React - Imagens de gatos</h1>

            <Image src={imgUrl} alt="img-gato" width={400} height={400}/>
        </main>
    );

}
