import React from "react"
import './index.css'

const Item = () => {
    return ( 
        <div className="item-loja">
            <img src="data:image/jpeg;base64,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" alt="" />


            <div className="info">
                <h3>PlayStation 5</h3>
                <p className="descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis, voluptatum obcaecati eius labore laboriosam repudiandae.</p>
                <p className="negrito">R$400</p>
            </div>

            <button>Vizualizar</button>
        </div> 
    );
}
 
export default Item