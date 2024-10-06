/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgflip.com',  // This should match the hostname from the error
        port: '',                    // Leave empty
        pathname: '/**',             // Allows any path under this hostname
      },
    ],
  },
};

  
