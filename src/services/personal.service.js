import { api } from '../helpers';

const basePath = '/personal';

function getAll() {
    return api.get(`${basePath}/getAllPersonal`);
}

function show_id(PersonalId) {
    return api.get(`${basePath}/${PersonalId}`)
}

function borrarPersonal(id) {
    return api.delete(`${basePath}/${id}`);
  }

function create(data) {
    return api.post(`${basePath}/`,data);
}

const PersonalService = {
    getAll,
    show_id,
    create,
    borrarPersonal,
};

export default PersonalService;