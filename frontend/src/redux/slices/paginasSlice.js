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
        }
    }
})

export const { mudarParaDetalhes } = paginasSlice.actions

export default paginasSlice.reducer