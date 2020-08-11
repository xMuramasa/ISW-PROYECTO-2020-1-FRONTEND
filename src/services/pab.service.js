import { api } from '../helpers';

const basePath = '/personal/pabellon';

function show_id(pabellonId) {
    return api.get(`${basePath}/${pabellonId}`)
}

function getAllPersonalPabellon(pabellonId) {
    return api.get(`${basePath}/getAllPabellon/${pabellonId}`);
}

function getAllPabellon() {
    return api.get(`${basePath}/getAllPabellon/todos`);
}

function borrarPersonalPabellon(id) {
    return api.delete(`${basePath}/${id}`);
}

function createPersonalPabellon(data) {
    return api.post(`${basePath}/`, data);
}

const PabellonService = {
    getAllPersonalPabellon,
    createPersonalPabellon,
    borrarPersonalPabellon,
    getAllPabellon,
    show_id,
};

export default PabellonService;