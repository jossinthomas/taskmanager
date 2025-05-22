const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { BookModel } = require('./models/book');


dotenv.config();


const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 19.99,
    category: 'Self-Help',
    image: '/atomichabits.jpg',
    description: 'An easy & proven way to build good habits & break bad ones.',
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 24.99,
    category: 'Thriller',
    image: '/silentpatient.jpg',
    description: 'A shocking psychological thriller of a woman’s act of violence.',
  },
  {
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    price: 22.5,
    category: 'Romance',
    image: '/itendswithus.jpg',
    description: 'A novel about the difficult choices in relationships.',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 18.0,
    category: 'Finance',
    image: '/psychologyofmoney.jpg',
    description: 'Timeless lessons on wealth, greed, and happiness.',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 16.5,
    category: 'Fiction',
    image: '/alchemist.jpg',
    description: 'A philosophical book about following your dreams.',
  },
  {
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    price: 20.0,
    category: 'Self-Help',
    image: '/thinklikeamonk.jpg',
    description: 'Train your mind for peace and purpose.',
  },
];


async function seedBooks() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    console.log('Clearing old books...');
    await BookModel.deleteMany({});

    console.log('Inserting new books...');
    await BookModel.insertMany(books);

    console.log('6 books inserted');
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedBooks();
