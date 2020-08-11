import { api } from '../helpers';

const basePath = '/personal/recuperacion';

function getAllPersonalRecup(recuperacionId) {
    return api.get(`${basePath}/getAllRecuperacion/${recuperacionId}`);
}

function borrarPersonalRecup(recuperacionId) {
    return api.delete(`${basePath}/${recuperacionId}`);
}

function createPersonalRecup(data) {
    return api.post(`${basePath}/`, data);
}

const RecuperacionService = {
    getAllPersonalRecup,
    borrarPersonalRecup,
    createPersonalRecup,
};

export default RecuperacionService;