import React from 'react'

import erro404 from 'componentes/assets/erro_404.png'

import styles from './naoEncontrada.module.css'

export default function NaoEncontrada() {
  return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>
                404
            </span>
            <h1 className={styles.titulo}>
                OPS Página não encontrada!
            </h1>

            <p className={styles.paragrafo}>
                Tem certeza de que era isso que você estava procurando? 
                Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div className={styles.botaoContainer}>
                <button >Voltar</button>
            </div>

            <img 
                className={styles.imagemCachorro}
                src={erro404}
                alt='Imagem de um cachorro com oculos'
            />
        </div>
        <div className={styles.espacoEmBranco}>

        </div>
    </>
  )
}
