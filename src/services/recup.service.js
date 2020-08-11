import { api } from '../helpers';

const basePath = '/personal/recuperacion';

function show_id(recuperacionId) {
    return api.get(`${basePath}/${recuperacionId}`)
}

function getAllPersonalRecup(recuperacionId) {
    return api.get(`${basePath}/getAllRecuperacion/${recuperacionId}`);
}

function getAllRecuperacion() {
    return api.get(`${basePath}/getAllRecuperacion/todos`);
}

function borrarPersonalRecup(recuperacionId) {
    return api.delete(`${basePath}/${recuperacionId}`);
}

function createPersonalRecup(data) {
    return api.post(`${basePath}/`, data);
}

const RecuperacionService = {
    getAllPersonalRecup,
    createPersonalRecup,
    borrarPersonalRecup,
    getAllRecuperacion,
    show_id
};

export default RecuperacionService;