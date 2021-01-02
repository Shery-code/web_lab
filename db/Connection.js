const mongoose = require("mongoose");

const URI =
  "mongodb://weblabterminal:weblabterminal@cluster0-shard-00-00.pevwq.mongodb.net:27017,cluster0-shard-00-01.pevwq.mongodb.net:27017,cluster0-shard-00-02.pevwq.mongodb.net:27017/weblab?ssl=true&replicaSet=atlas-pa9dqu-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
