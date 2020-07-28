import React from 'react';

const Forms = (props) => {
    return(
        <div className = "add">
            <h1>Add a Product </h1>
            <form onSubmit={props.onSubmit}>
                <input name="title" type = "text" placeholder="Enter Title" value={props.title} onChange={props.onChange}/>
                <input name="description"type = "text" placeholder="Enter Description" value={props.description} onChange={props.onChange}/>
                <input name="price" type = "text" placeholder="Enter Price" value={props.price} onChange={props.onChange}/>
                <input type = "submit"/>
            </form>                
        </div>
    )
}

export default Forms;