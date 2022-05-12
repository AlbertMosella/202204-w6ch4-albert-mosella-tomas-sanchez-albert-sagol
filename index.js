const { initializeServer } = require("./server");

const port = process.env.PORT || 4000;

initializeServer(port);
