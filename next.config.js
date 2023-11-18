// /** @type {import('next').NextConfig} */
// const nextConfig = {}
// const withImages = require('next-images');
// appDir: true;
// module.exports = withImages()

/** @type {import('next').NextConfig} */

//     reactStrictMode: true,
//     async headers() {
//       // to allow specific headers to appear in requests
//       // https://nextjs.org/docs/advanced-features/security-headers
//     const securityHeaders = [
//         // important
//         { key: "Access-Control-Expose-Headers", value: "Content-Disposition" },
//     ]
//     return [
//         {
//         source: '/src', // req path
//         // headers: securityHeaders,
//         basePath: '/src', // Set your desired base path
//         }
//     ]
//     }
// }
// /:path*

module.exports = {
    basePath: '',
  }