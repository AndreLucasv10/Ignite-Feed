import React from 'react'
import styles from './Post.module.css'
import Comment from './Comment'
const Post = () => {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/andrelucasv10.png" alt="" />
                <div className={styles.authorInfo}>
                    <strong>André Lucas</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time dateTime="2022-05-11 08:13:30" title='11 de maio as 08:13'>Publicado há 1h</time>
        </header>
        <div className={styles.content}>
            <p>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a>👉 jane.design/doctorcare</a></p>
                <p><a>#novoprojeto #nlw #rocketseat</a></p>
            </p>
        </div>

        <form className={styles.commentForm} action="">
            <strong> Deixe seu feedback</strong>
            <textarea placeholder='Deixe um Comentario' />
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
    </article>
)
}

export default Post