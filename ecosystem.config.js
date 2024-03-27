module.exports = {
  apps: [
    {
      name: "my-graphql-server",
      script: "npm",
      args: ["start"],
      instances: 1,
      autorestart: true,
    },
  ],
};
