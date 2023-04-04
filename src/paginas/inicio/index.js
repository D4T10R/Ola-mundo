import React from 'react'

import Banner from 'componentes/Banner'

import posts from 'json/posts'

import styles from './inicio.module.css'
import Post from 'componentes/PostCard'

export default function Inicio() {
  return (

    <ul className={styles.posts}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        )
      })}
    </ul>

  )
}
