import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loja: true,
    detalhes: false,
    carrinho: false
}

export const paginasSlice = createSlice({
    name: 'paginas',
    initialState,
    reducers: {
        mudarParaDetalhes: (state, action) => {
            state.detalhes = action.payload
            state.loja = false
            state.carrinho = false
        },
        mudarParaCarrinho: (state, action) => {
            state.detalhes = false
            state.loja = false
            state.carrinho = true
        }
    }
})

export const { mudarParaDetalhes, mudarParaCarrinho } = paginasSlice.actions

export default paginasSlice.reducer