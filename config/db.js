import { connect } from 'mongoose';

const connectDB = async () => {
  console.log('process.env.MONGO_URI ', process.env.MONGO_URI)
  const conn = await connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
