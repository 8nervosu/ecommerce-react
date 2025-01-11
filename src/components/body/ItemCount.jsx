import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);

    const adicionar = () => {
        if (count < stock) {
          setCount(count + 1);
        }
    };

    const remover = () => {
        if (count > 1) {
          setCount(count - 1);
        }
    };

    const handleOnAdd = () => {
        if (stock > 0 && count > 0) {
            onAdd(count);
        }
    };

    return(
        <div>
             <h2>{count}</h2>
            <button 
                onClick={remover}
                disabled={count === 1}
            >
                -
            </button>
            <button
                onClick={adicionar}
                disabled={count >= stock}
            >
                +
            </button>
            <br></br>
            <button
                onClick={handleOnAdd}
                disabled={stock === 0 || count === 0}
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
}

export default ItemCount;
