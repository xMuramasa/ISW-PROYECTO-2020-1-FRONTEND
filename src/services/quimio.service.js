import { api } from '../helpers';

const basePath = '/personal/quimioterapia';

function getAllPersonalQuimioterapia() {
    return api.get(`${basePath}/getAllQuimioterapia/${quimioterapiaId}`);
}

function borrarPersonalQuimioterapia(id) {
    return api.delete(`${basePath}/${id}`);
}

function createPersonalQuimioterapia(data) {
    return api.post(`${basePath}/`, data);
}

const QuimioterapiaService = {
    getAllPersonalQuimioterapia,
    createPersonalQuimioterapia,
    borrarPersonalQuimioterapia,
};

export default QuimioService;