/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//     enabled: process.env.ANALYZE === "true",
// });
// const rewites =
//     process.env.NODE_ENV == "development"
//         ? {
//             async rewrites() {
//                 return [
//                     {
//                         source: "/api",
//                         destination: "http://localhost:3667", // Proxy to Backend
//                     },
//                 ];
//             },
//         }
//         : {};

// module.exports = withBundleAnalyzer({
//     // reactStrictMode: true,
//     // output: "standalone",
//     // experimental: {
//     //     largePageDataBytes: 1024 * 1024 * 10,
//     // },
//     // images: {
//     //     domains: getAllowDomains(),
//     // },
//     // ...getCdnUrl(),
//     ...rewites,
// });
const nextConfig = {}

module.exports = nextConfig