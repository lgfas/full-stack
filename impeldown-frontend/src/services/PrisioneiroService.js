import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/prisioneiros';

export const buscarPrisioneiros = () => {
  return axios.get(REST_API_BASE_URL);
};

export const cadastrarPrisioneiro = (prisioneiro) => {
  return axios.post(REST_API_BASE_URL, prisioneiro);
};
