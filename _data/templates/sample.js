module.exports = {
  name: "My Sites", // optional, falls back to object key
  description: "The default sites that get tested",
  options: {
    frequency: 60 * 23, // (in minutes), 23 hours
  },
  urls: [
    "https://prikeshsavla.com/",
    "https://bhel.prikeshsavla.com/",
    "https://rasam.prikeshsavla.com/",
  ],
};
