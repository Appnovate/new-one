module.exports = [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
        name: 'strapi::cors',
        config: {
          origin: ['http://localhost:3000', 'https://silly-nightingale.142-93-209-108.plesk.page'],
          methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
          headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
          keepHeaderOnError: true,
        },
      },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];