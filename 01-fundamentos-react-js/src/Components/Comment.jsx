import React from 'react'
import styles from './Comment.module.css' 
import { ThumbsUp, Trash } from 'phosphor-react'
const Comment = () => {
  return (
    <div className={styles.comment}>
        <img className={styles.avatar} src="https://github.com/andrelucasv10.png" alt="" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time dateTime="2022-05-11 08:13:30" title='11 de maio as 08:13'>Cerca de 1h atrás</time>
                    </div>
                    <button title='Deletar Comentario'>
                        <Trash size={20} />
                    </button>
                </header>
                <p>Muito bom devon parabens !!!</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>

    </div>
  )
}

export default Comment