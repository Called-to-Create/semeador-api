import 'regenerator-runtime/runtime';
import Mongoose from 'mongoose';
import App from './app';

Mongoose.connect(process.env.DATABASE_CONNECTION, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

App.get('/', (_, res) => res.send({ message: 'API Ideas' }));

const port = process.env.PORT || 3334;

App.listen(port);

console.log(`API WORKS ON ${process.env.NODE_ENV}:${port}`);
