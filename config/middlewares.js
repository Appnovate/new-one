module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     origin: 'https://vibrant-wu.172-104-186-52.plesk.page',
  //     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  //     headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  //     keepHeaderOnError: true,
  //   },
  // },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
