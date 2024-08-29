import axios from 'axios';

import { getStrapiURL } from '@/helpers';

interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

interface LoginUserProps {
  identifier: string;
  password: string;
}

axios.defaults.baseURL = getStrapiURL();

export const registerUserService = async (userData: RegisterUserProps) => {
  try {
    const response = await axios.post(
      '/api/auth/local/register',
      {
        ...userData,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    return { error };
    // console.error('Registration Service Error:', error);
  }
};

export const loginUserService = async (userData: LoginUserProps) => {
  try {
    const response = await axios.post(
      '/api/auth/local',
      { ...userData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Login Service Error:', error);
    throw error;
  }
};
