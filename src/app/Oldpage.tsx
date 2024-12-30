"use client";
import { useState }from "react";
import styles from "~/styles/homepage.module.css";
import { Title } from "./_components/title";
import { Card } from "./_components/card";

export default function Homepage() {
  const [count, setCount] = useState<number | undefined | string>(0);

  return (
    <main className={styles.main}>
      <h1>Aulas React</h1>
      <Title content="Aulas Prisma"/>
      <Card title="Beterraba">
        <p>Prop de teste</p>
        <button>Botão do card</button>
      </Card>



      <h1>Aula contador React</h1>
      <div className={styles.contadorContainer}>
        <button className={styles.botaoContador} onClick={() => setCount(count -1)}>
          -
        </button>
        <span className={styles.numContador}>{count}</span>
        <button className={styles.botaoContador} onClick={() => setCount(count +1)}>
          +
        </button>
      </div>
    </main>
  );
}