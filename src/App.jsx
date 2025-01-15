import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/menu/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/saudacao/theme';
import ItemCount from './components/body/ItemCount';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);

  const handleOnAdd = (quantity) => {
    setCart([...cart, { id: 1, quantity }]);
    console.log(`Item adicionado ao carrinho: Quantidade ${quantity}`);
  };

  return (
    <><>
      <div>
      <ItemCount stock={5} initial={0} onAdd={handleOnAdd}/>
      </div>

      <div>
        <h2>Carrinho:</h2>
        {cart.map((item, index) => (
          <div key={index}>Item {item.id}: Quantidade {item.quantity}</div>
        ))}
      </div>


      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </><ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider></>
  )
  
}

export default App
