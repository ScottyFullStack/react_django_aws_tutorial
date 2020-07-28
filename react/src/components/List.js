import React from 'react';

const List = (props) => {
    return(
        <div className = "list-items">
        {props.products.map(product => {
            return(
                <div className = "product-tile">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button onClick={() => { props.delete(product.id)}}>delete</button>
                </div>
            )

        })}
        </div>
    )
}

export default List;