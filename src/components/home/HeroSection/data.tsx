import axios from 'axios';

import { flattenAttributes, getStrapiURL } from '@/helpers';

axios.defaults.baseURL = getStrapiURL();

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
              feature: {
                populate: ['heading', 'text'],
              },
              featureDetails: {
                populate: ['heading', 'icon'],
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
