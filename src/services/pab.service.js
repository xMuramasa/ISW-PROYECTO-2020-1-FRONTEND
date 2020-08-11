import { api } from '../helpers';

const basePath = '/personal/pabellon';

function getAllPersonalPabellon(pabellonId) {
    return api.get(`${basePath}/getAllPabellon/${pabellonId}`);
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
};

export default PabellonService;