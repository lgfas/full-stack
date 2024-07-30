import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/prisioneiros';

export const buscarPrisioneiros = () => {
  return axios.get(REST_API_BASE_URL);
};

export const cadastrarPrisioneiro = (prisioneiro) => {
  return axios.post(REST_API_BASE_URL, prisioneiro);
};

export const buscarPrisioneiroPorId = (id) => {
  return axios.get(REST_API_BASE_URL + '/' + id);
};

export const atualizarPrisioneiro = (id, prisioneiro) => {
  return axios.put(REST_API_BASE_URL + '/' + id, prisioneiro);
};

export const removerPrisioneiro = (id) => {
  return axios.delete(REST_API_BASE_URL + '/' + id);
};