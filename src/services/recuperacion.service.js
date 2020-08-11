import { api } from '../helpers';

const basePath = '/personal/recuperacion';

function show_id(recuperacionId) {
    return api.get(`${basePath}/${recuperacionId}`)
}

function getAllPersonalRecuperacion(recuperacionId) {
    return api.get(`${basePath}/getAllRecuperacion/${recuperacionId}`);
}

function getAllRecuperacion() {
    return api.get(`${basePath}/getAllRecuperacion/todos`);
}

function borrarPersonalRecuperacion(id) {
    return api.delete(`${basePath}/${id}`);
}

function createPersonalRecuperacion(data) {
    return api.post(`${basePath}/`, data);
}

const RecuperacionService = {
    getAllPersonalRecuperacion,
    createPersonalRecuperacion,
    borrarPersonalRecuperacion,
    getAllRecuperacion,
    show_id
};

export default RecuperacionService;