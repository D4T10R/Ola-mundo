import React from 'react'

import posts from 'json/posts.json'

import styles from './PostsRecomendados.module.css'
import Post from 'componentes/PostCard'

export default function PostsRecomendados(id) {


    return (
        <div className={styles.postsRecomendados}>
            <h2 className={styles.titulo}>Outros posts que você pode gostar:</h2>
            <ul className={styles.posts}>
                {
                posts.map((post) => {
                    if (post != id) {
                        return (
                            <Post post={post}/>
                        )   
                    }
                }).slice(0, 4)}
            </ul>
        </div>
    )
}
