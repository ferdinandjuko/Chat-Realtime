import dns from "node:dns/promises";
dns.setServers(['8.8.8.8', '1.1.1.1']);

import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (err) {
        console.error(err);
    }
}


/*mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("DB Connetion Successfull");
  }).catch((err) => {
    console.log(err.message);
  });
*/