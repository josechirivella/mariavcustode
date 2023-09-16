export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  return proxyRequest(
    event,
    `${config.public.strapiApiURL}/${event.context.params!.path}`,
    { headers: { "X-API-KEY": config.strapiToken } },
  );
});
