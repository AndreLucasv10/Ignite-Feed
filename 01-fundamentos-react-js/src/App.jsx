import { Header } from './Components/Header';
import './global.css'
import styles from '../src/Components/App.module.css'
import { Sidebar } from './Components/Sidebar';
import Post from './Components/Post';
function App() {
  return (
    <>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post />
            <Post />
          </main>
        </div>
    </>
  )
}

export default App
