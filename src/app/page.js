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

    return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Olá {name}</h2>

          <button className={styles.btnCust} onClick={
              () => {setName("MUNDO!!!!")}
          }>
              Clica em mim ;)
          </button>

          <button className={styles.btnCust} onClick={atualizaMensagemOla}>
              Atualiza mensagem Olá
          </button>

          <input value={input}
                 onChange={(evt) => setInput(evt.target.value)} />
      </main>
    </div>
  );
}
