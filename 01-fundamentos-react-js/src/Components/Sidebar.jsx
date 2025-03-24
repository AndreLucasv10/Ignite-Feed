import React from 'react'
import styles from '../Components/Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1742217279960-977bb5d13f75?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://github.com/andrelucasv10.png" alt="" />
            <strong>André Lucas</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu Perfil
            </a>
        </footer>
    </aside>
)
}
