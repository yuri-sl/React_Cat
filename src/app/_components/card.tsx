import styles from "~/styles/card.module.css";

type CardProps = React.PropsWithChildren<{ title: string}>;

export function Card({title, children}: CardProps){
    return (
        <div className={styles.card}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}