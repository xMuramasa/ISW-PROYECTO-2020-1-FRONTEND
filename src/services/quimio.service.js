import { api } from '../helpers';

const basePath = '/personal/quimioterapia';

function show_id(quimioterapiaId) {
    return api.get(`${basePath}/${quimioterapiaId}`)
}

function getAllPersonalQuimioterapia(quimioterapiaId) {
    return api.get(`${basePath}/getAllQuimioterapia/${quimioterapiaId}`);
}

function getAllQuimioterapia() {
    return api.get(`${basePath}/getAllQuimioterapia/todos`);
}

function borrarPersonalQuimioterapia(id) {
    return api.delete(`${basePath}/${id}`);
}

function createPersonalQuimioterapia(data) {
    return api.post(`${basePath}/`, data);
}

const QuimioService = {
    getAllPersonalQuimioterapia,
    createPersonalQuimioterapia,
    borrarPersonalQuimioterapia,
    getAllQuimioterapia,
    show_id
};

export default QuimioService;