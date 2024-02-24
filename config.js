const mongoose = require('mongoose');
const password = encodeURIComponent('Yash@1234');
const url = `mongodb+srv://modiyash95:${password}@product.jsef917.mongodb.net/?retryWrites=true&w=majority&appName=Product`;

const databaseConnection = async () => {
  try {
    const isConnect = await mongoose.connect(url);
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
