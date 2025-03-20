import {Post} from './Post';
import { Header } from './Components/Header';
import './style.css'
function App() {
  return (
    <>
      <Header />
      <Post 
        autor='André Lucas' 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta voluptas inventore dolorem ex maiores ea quod, tempore odio enim dolor tempora dolores doloremque rem et nesciunt consequatur delectus reprehenderit nam."
        />
    </>
  )
}

export default App
