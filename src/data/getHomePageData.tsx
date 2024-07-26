import { fetchData } from './loaders';

export const getHomePageData = async () => {
  const url = '/api/home-page';
  const searchParams = {
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
  };

  return await fetchData(url, searchParams);
};

export const getHomePageMetadata = async () => {
  const url = '/api/home-page';

  const searchParams = {
    populate: { fields: ['title', 'description'] },
  };

  return fetchData(url, searchParams);
};
