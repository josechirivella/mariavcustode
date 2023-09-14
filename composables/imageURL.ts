export function convertStrapiImageURL(url: string) {
  const originalUrl = url;
  const config = useRuntimeConfig();
  const STRAPI_URL = config.NUXT_STRAPI_URL;

  return `${STRAPI_URL}${originalUrl}`;
}
