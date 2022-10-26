import React from "react"
import { useState } from "react"

import './index.css'

const DetalhesItem = ({ item }) => {

    const [precoTotal, setPrecoTotal] = useState(item.preco)

    let arrayQuatidade = []
    for(let i=1; i <= item.quantidadeEstoque; i++) arrayQuatidade.push(i)

    return ( 
        <div className="detalhes-item">
            <img src={item.imagem} alt="" />
            <div className="info">
                <h3>{item.produto}</h3>     
                <p>preco: {item.preco}</p>
                <p>descrição: {item.descricao}</p>
            </div>
            <div className="add-carrinho">
                <div>preço: {precoTotal}</div>
                <div>status: {item.quantidadeEstoque > 0 ? 'Em estoque' : 'Sem estoque'}</div>
                <div className="quantidade">
                    qtd:
                    <select name="quantidade" id="quantidade">
                        { arrayQuatidade.map((valor) => <option value={valor}>{valor}</option> ) }
                    </select> 

                </div>
                <div className="botao"><button>Adicionar ao carrinho</button></div>
            </div>
        </div>
    )
}
 
export default DetalhesItem