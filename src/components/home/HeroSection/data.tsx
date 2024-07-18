import axios from 'axios';

import { flattenAttributes } from '@/helpers';

axios.defaults.baseURL = 'http://localhost:1337';

export const getStrapiData = async (path: string) => {
  try {
    const response = await axios.get(path, {
      params: {
        populate: {
          blocks: {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
              form: {
                populate: ['heading', 'text'],
              },
            },
          },
        },
      },
    });
    const flattenData = flattenAttributes(response.data);
    return flattenData;
  } catch (error) {
    console.error('Error fetching data from Strapi:', error);
    throw error;
  }
};
