import React from "react"
import './index.css'

import { useDispatch } from 'react-redux'
import { mudarParaDetalhes } from "../../redux/slices/paginasSlice"

const Item = ({ item }) => {

    const dispatch = useDispatch()

    return ( 
        <div className="item-loja">
            <img src={item.imagem} alt="" />


            <div className="info">
                <h3>{item.produto}</h3>
                <p className="descricao">{item.descricao}</p>
                <p className="negrito">R${item.preco}</p>
            </div>

            <button onClick={() => dispatch(mudarParaDetalhes(item))}>Vizualizar</button>
        </div> 
    );
}
 
export default Item
