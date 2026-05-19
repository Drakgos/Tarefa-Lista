'use client';

import styles from "./page.module.css";
import {useState} from "react";

/*
    TODO
    Mensagem Olá só é alterada quando se clica num botão
    Função do botão é ir buscar o que está no input e colocar na mensagem Olá

    É NECESSÁRIO CRIAR UMA SEGUNDA VARIÁVEL DE ESTADO
 */

export default function Home() {
    // variável de estado
    const [name, setName] = useState("mundo!");
    const [input, setInput] = useState("");

    // função
    const atualizaMensagemOla =
        () => { setName(input)}
//fsdf
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.authorInfo}>
                    <span className={styles.authorName}>Gonçalo Sousa Santos</span>
                    <span className={styles.authorNum}>Nº 31838</span>
                </div>
                <h2 className={styles.greeting}>Olá {name}</h2>

                <button className={styles.btnGhost} onClick={() => setName("MUNDO!!!!")}>
                    Clica em mim ;)
                </button>

                <input
                    className={styles.inputCust}
                    value={input}
                    onChange={(evt) => setInput(evt.target.value)}
                    placeholder="Escreve um nome..."
                />

                <button className={styles.btnPrimary} onClick={atualizaMensagemOla}>
                    Atualizar mensagem Olá
                </button>
            </div>
        </div>

  );
}
