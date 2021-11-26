import axios from 'axios';
import Swal from 'sweetalert2';


export const usuarioRequeridos = (payload) => ({
    type: 'USUARIO_REQUERIDOS',
    payload,
});

export const cargandoUsuarios = (payload) => ({
    type: 'CARGANDO_USUARIOS',
    payload,
});

export const getGitHubProfile = (payload) => {
    return (dispatch) => {
        cargandoUsuarios(true);
        axios.get(`https://api.github.com/search/users?q=${payload}&page=1`)
            .then(res => {
                dispatch(usuarioRequeridos(res?.data?.items));
                if (res?.data?.items.length === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No se encontraron usuarios',
                    });
                }
                cargandoUsuarios(false);
            })
            .catch(err => { console.log(err) });
    };
}