import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import './index.css'

import Item from './components/item/Item'
import DetalhesItem from './components/detalhesItem/DetalhesItem'

const App = () => {
    const [itens, setItens] = useState([])

    const { detalhes } = useSelector((state) => state.paginas)
    const { loja } = useSelector((state) => state.paginas)
    
    useEffect(() => {
        console.log('oi')
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
    </div>
}   
 
export default App