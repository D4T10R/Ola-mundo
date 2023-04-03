import React from 'react'

import circuloColorido from 'componentes/assets/circulo_colorido.png'
import minhaFoto from 'componentes/assets/minha_foto.png'

import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá mundo!
            </h1>
            <p className={styles.paragrafo}>
                [00:00] Vamos continuar desenvolvendo o projeto “Olá Mundo!”. A próxima parte que vamos fazer, é justamente o banner que aparece o título “Olá, mundo!”, e também um texto de apresentação e aparece até uma foto minha. E o bacana dessa pasta é que você já vai poder começar a deixar o projeto mais com a sua cara, você coloca a sua imagem, o seu texto de apresentação, isso já é bem legal.
            </p>
        </div>
        <div className={styles.imagens}>
            <img 
                className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
            />
            <img 
                className={styles.minhaFoto}
                src={minhaFoto}
                alt='foto do Antonio sorrindo'
            />
        </div>
    </div>
  )
}
