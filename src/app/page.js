'use client'

import styles from "./page.module.css";
import { useState } from "react";

export default function Lista() {

    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);

    const [editarIndex, setEditarIndex] = useState(null);
    const [textoEditar, setTextoEditar] = useState("");

    // Mostrar apenas parte do texto
    const cortarTexto = (texto) => {
        const limite = 25;

        if (texto.length > limite) {
            return texto.substring(0, limite) + " ...";
        }

        return texto;
    };

    // Adicionar tarefa
    const handleButtonClick = () => {

        const textoLimpo = inputTexto.trim();

        if (textoLimpo === "") {
            alert("Não podes adicionar texto vazio");
            return;
        }

        setLista([...lista, textoLimpo]);
        setInputTexto("");
    };

    // Apagar tarefa
    const apagarItem = (index) => {
        setLista(lista.filter((_, i) => i !== index));
    };

    // Editar tarefa
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

                <h2 style={{color:'lightcyan'}}>
                    Lista de tarefas
                </h2>

                <div className={styles.displayFlex}>

                    <input
                        value={inputTexto}
                        onChange={(e)=>setInputTexto(e.target.value)}
                        className={styles.inputLista}
                    />

                    <button
                        onClick={handleButtonClick}
                        className={styles.botaoLista}
                    >
                        Adicionar
                    </button>

                    {lista.map((entrada,index)=>(

                        <div key={index}>

                            {editarIndex === index ? (

                                <>
                                    <input
                                        value={textoEditar}
                                        onChange={(e)=>
                                            setTextoEditar(e.target.value)
                                        }
                                    />

                                    <button onClick={guardarEdicao}>
                                        Guardar
                                    </button>
                                </>

                            ) : (

                                <>
                                    <p title={entrada}>
                                        {cortarTexto(entrada)}
                                    </p>

                                    <button
                                        onClick={()=>editarItem(index)}
                                    >
                                        Editar
                                    </button>

                                    <button
                                        onClick={()=>apagarItem(index)}
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