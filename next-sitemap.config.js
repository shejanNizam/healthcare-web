// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: "https://cenmhealthcare.com",
//   generateRobotsTxt: true,
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://cenmhealthcare.com",
  generateRobotsTxt: true,
  exclude: ["/admin*", "/api*"], // Exclude non-public pages
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      "/": 1.0,
      "/client-services": 0.9,
      "/all-jobs": 0.8,
      "/about": 0.8,
      "/contact": 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
