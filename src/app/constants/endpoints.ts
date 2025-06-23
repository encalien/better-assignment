const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const ENDPOINTS = {
  doctors: `${BASE_URL}/users`,
  tasks: `${BASE_URL}/todos`,
  doctorTasks: (doctorId: number) => `${BASE_URL}/users/${doctorId}/todos`,
};
