import React from 'react'
import { useParams } from 'react-router-dom'

import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import './Post.css'

export default function Post(  ) {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <h1>POST NÃO ENCONTRADO</h1>
    }

    return (
        <PostModelo
            fotoCapa={`assets/post/${post.id}/capa.png`}
            titulo={post.titulo}

        >   
            <div className='post-markdown-container'>
                <ReactMarkdown >
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}