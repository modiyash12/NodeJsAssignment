const mongoose = require('mongoose');
const password = encodeURIComponent('Yash@1234');
const url = `mongodb+srv://modiyash95:${password}@cluster1.8gm1j8z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

const databaseConnection = async () => {
  try {
    const isConnect = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    if (isConnect) {
      console.log("connected");
    }
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

module.exports = {
  databaseConnection
}
