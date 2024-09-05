import axios from 'axios';
import qs from 'qs';

import { getStrapiURL } from '@/helpers';

import { getAuthToken } from './get-token';

const query = qs.stringify({
  populate: { image: { fields: ['url', 'alternativeText'] } },
});

export const getUserMeLoader = async () => {
  const baseUrl = getStrapiURL();

  const url = new URL('/api/users/me', baseUrl);
  url.search = query;

  const authToken = await getAuthToken();
  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const response = await axios.get(url.href, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.data;

    if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: data, error: null };
  } catch (error) {
    return { ok: false, data: null, error: error };
  }
};
