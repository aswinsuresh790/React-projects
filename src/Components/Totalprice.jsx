import React from 'react';
export default function TotalPrice(props){
    const{products}=props
    return(
        <div className='total'>
            <h3>{props.totalcost}</h3>
        </div>
    )
}