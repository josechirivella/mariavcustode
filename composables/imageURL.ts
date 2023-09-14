export function convertStrapiImageURL(url: string) {
  const originalUrl = url;
  const {VITE_STRAPI_URL} = import.meta.env;

  return `${VITE_STRAPI_URL}${originalUrl}`
}
