module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/channel/1",
        permanent: true,
      },
    ];
  },
};
