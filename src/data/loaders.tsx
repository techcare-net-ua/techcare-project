import axios from 'axios';
import qs from 'qs';

import { flattenAttributes, getStrapiURL } from '@/helpers';

axios.defaults.baseURL = getStrapiURL();

export const fetchData = async (url: string, queryParams: object) => {
  const authToken = null;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };

  const fullUrl = `${url}?${qs.stringify(queryParams, { encode: false })}`;

  const config = {
    headers: headers,
  };

  try {
    const response = await axios.get(fullUrl, authToken ? config : {});
    const flattenData = flattenAttributes(response.data);
    return flattenData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
