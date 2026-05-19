'use client'

import styles from "./page.module.css";
import { useState } from "react";

export default function Lista() {

    const MAX_CARACTERES = 50;

    // Estados
    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);

    const [editarIndex, setEditarIndex] = useState(null);
    const [textoEditar, setTextoEditar] = useState("");

    // Adicionar tarefa
    const handleButtonClick = () => {

        const textoLimpo = inputTexto.trim();

        // impede texto vazio
        if (textoLimpo === "") {
            alert("Não podes adicionar texto vazio");
            return;
        }

        // adiciona à lista
        setLista([...lista, textoLimpo]);

        // limpa input
        setInputTexto("");
    };

    // Apagar tarefa
    const apagarItem = (index) => {
        const novaLista = lista.filter((_, i) => i !== index);
        setLista(novaLista);
    };

    // Iniciar edição
    const editarItem = (index) => {
        setEditarIndex(index);
        setTextoEditar(lista[index]);
    };

    // Guardar edição
    const guardarEdicao = () => {

        const textoLimpo = textoEditar.trim();

        if (textoLimpo === "") {
            alert("O texto não pode estar vazio");
            return;
        }

        const novaLista = [...lista];
        novaLista[editarIndex] = textoLimpo;

        setLista(novaLista);

        setEditarIndex(null);
        setTextoEditar("");
    };


    return (
        <div>
            <main>

                <h2 style={{ color: 'lightcyan' }}>
                    Lista de tarefas
                </h2>

                <div className={styles.displayFlex}>

                    <label>
                        Escreve a tarefa
                    </label>

                    <div className={styles.divInputBtn}>

                        <input
                            value={inputTexto}
                            maxLength={MAX_CARACTERES}
                            onChange={(e) =>
                                setInputTexto(e.target.value)
                            }
                            className={styles.inputLista}
                        />

                        <button
                            onClick={handleButtonClick}
                            className={styles.botaoLista}
                        >
                            Adicionar
                        </button>

                    </div>

                    <p>
                        Caracteres restantes:
                        {" "}
                        {MAX_CARACTERES - inputTexto.length}
                    </p>

                    {lista.map((entrada, index) => (

                        <div key={index}>

                            {editarIndex === index ? (

                                <>
                                    <input
                                        value={textoEditar}
                                        maxLength={MAX_CARACTERES}
                                        onChange={(e) =>
                                            setTextoEditar(e.target.value)
                                        }
                                    />

                                    <button
                                        onClick={guardarEdicao}
                                    >
                                        Guardar
                                    </button>
                                </>

                            ) : (

                                <>
                                    <p>{entrada}</p>

                                    <button
                                        onClick={() => editarItem(index)}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        onClick={() => apagarItem(index)}
                                    >
                                        Apagar
                                    </button>
                                </>

                            )}

                        </div>

                    ))}

                </div>

            </main>
        </div>
    );
}