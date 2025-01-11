import * as React from 'react';
function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const adicionar = () => {
        if (count < stock) {
          setCount(count + 1);
        }
    };

    const remover = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    };

    const handleOnAdd = () => {
        if (stock > 0) {
            onAdd(count);
        }
    };

    return(
        <div>
            <button 
                onClick={remover}
                disabled={count===0}
            >
                -
            </button>
            <h2>{count}</h2>
            
            <button
                onClick={adicionar}
                disabled={count>=stock}
            >
                +
            </button>

            <button
                onAdd={handleOnAdd}
                disabled={stock===0}
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
}

