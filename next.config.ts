const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  webpack: (config: any) => {
    config?.module?.rules?.push({
      test: /\.node$/,
      use: "file-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
