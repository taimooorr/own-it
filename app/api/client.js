import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.1.107:9000/api'
});

apiClient.get('/listings').then(response => {
  if (!response.ok) return console.log('Error', response);
});


export default apiClient;