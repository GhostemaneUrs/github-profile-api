const stateInicial = {
    usuarios: [],
    cargando: false,
}

const reducerState = (state = stateInicial, action) => {
    switch (action.type) {
        case 'USUARIOS_REQUERIDOS':
            return {
                ...state,
                usuarios: action.payload,
            }
        case 'CARGADO_USUARIOS':
            return {
                ...state,
                cargando: action.payload,
            }
        default:
            return state
    }
}

export default reducerState;