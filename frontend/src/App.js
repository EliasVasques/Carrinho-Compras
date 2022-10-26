import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import './index.css'

import Item from './components/item/Item'
import DetalhesItem from './components/detalhesItem/DetalhesItem'
import Carrinho from './components/carrinho/Carrinho'

const App = () => {
    const [itens, setItens] = useState([])

    const { detalhes } = useSelector((state) => state.paginas)
    const { loja } = useSelector((state) => state.paginas)
    const { carrinho } = useSelector((state) => state.paginas)
    
    useEffect(() => {
        fetch('http://localhost:5000/api/itens/')
            .then((resposta) => resposta.json())
            .then((itens) => setItens(itens))
    }, [])

    return <div>
        <div class="container-loja">
            { 
                loja && itens && itens.map((item) => 
                    <Item key={item._id} item={item} />
                )
            }
        </div>
        { 
            detalhes && <DetalhesItem item={detalhes} />
        }
        { 
            carrinho && <Carrinho item={carrinho} />
        }
    </div>
}   
 
export default App