import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/prisioneiros';

const buscarPrisioneiros = () => {
  return axios.get(REST_API_BASE_URL);
};

export default buscarPrisioneiros;