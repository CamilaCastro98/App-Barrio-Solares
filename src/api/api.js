import axios from 'axios';

const API_URL = 'https://tu-api.com/login';

export const loginUser = async (dni, user, name) => {
  try {
    const response = await axios.post(API_URL, {
      dni,
      user,
      name,
    });
    return response.data;
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    throw error;
  }
};
