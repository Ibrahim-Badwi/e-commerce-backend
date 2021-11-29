import express, { request, response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors);
const products = [
  {
    id: 1,
    imgs: [
      '../assets/images/item55.png',
      '../assets/images/item56.png',
      '../assets/images/item57.png',
    ],
    title: 'Saodimallsu Womens Turtleneck Oversized...',
    price: '49',
    onSale: true,
    salePrice: '99',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'green', 'yellow', 'blue'],
    reviews: [
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 5,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 4,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 3,
      },
    ],
  },
  {
    id: 2,
    imgs: [
      '../assets/images/item56.png',
      '../assets/images/item57.png',
      '../assets/images/item58.png',
    ],
    title: 'Saodimallsu Womens Turtleneck Oversized...',
    price: '49',
    onSale: false,
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'green', 'yellow', 'blue'],
    reviews: [
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 5,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 4,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 3,
      },
    ],
  },
  {
    id: 3,
    imgs: [
      '../assets/images/item57.png',
      '../assets/images/item56.png',
      '../assets/images/item55.png',
    ],
    title: 'Saodimallsu Womens Turtleneck Oversized...',
    price: '49',
    onSale: true,
    salePrice: '99',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'green', 'yellow', 'blue'],
    reviews: [
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 5,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 4,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 3,
      },
    ],
  },
  {
    id: 4,
    imgs: [
      '../assets/images/item58.png',
      '../assets/images/item57.png',
      '../assets/images/item56.png',
    ],
    title: 'Saodimallsu Womens Turtleneck Oversized...',
    price: '49',
    onSale: false,
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'green', 'yellow', 'blue'],
    reviews: [
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 5,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 4,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 3,
      },
    ],
  },
  {
    id: 5,
    imgs: [
      '../assets/images/item59.png',
      '../assets/images/item58.png',
      '../assets/images/item57.png',
    ],
    title: 'Saodimallsu Womens Turtleneck Oversized...',
    price: '49',
    onSale: true,
    salePrice: '99',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'green', 'yellow', 'blue'],
    reviews: [
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 5,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 4,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 3,
      },
    ],
  },
  {
    id: 6,
    imgs: [
      '../assets/images/item60.jpg',
      '../assets/images/item59.png',
      '../assets/images/item58.png',
    ],
    title: 'Saodimallsu Womens Turtleneck Oversized...',
    price: '49',
    onSale: true,
    salePrice: '99',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'green', 'yellow', 'blue'],
    reviews: [
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 5,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 4,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 3,
      },
    ],
  },
  {
    id: 7,
    imgs: [
      '../assets/images/item61.png',
      '../assets/images/item60.jpg',
      '../assets/images/item59.png',
    ],
    title: 'Saodimallsu Womens Turtleneck Oversized...',
    price: '49',
    onSale: false,
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'green', 'yellow', 'blue'],
    reviews: [
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 5,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 4,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 3,
      },
    ],
  },
  {
    id: 8,
    imgs: [
      '../assets/images/item62.jpg',
      '../assets/images/item61.png',
      '../assets/images/item60.jpg',
    ],
    title: 'Saodimallsu Womens Turtleneck Oversized...',
    price: '49',
    onSale: true,
    salePrice: '99',
    inStock: true,
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'green', 'yellow', 'blue'],
    reviews: [
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 5,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 4,
      },
      {
        id: 1,
        user: 'Olha Chabanov',
        date: 'June 5, 2021',
        content:
          'I’m old (rolling through my 50’s). But, this is my daughter in law’s favorite color right now.❤️ So I wear it whenever we hang out! She’s my fashion consultant who keeps me on trend🤣',
        rating: 3,
      },
    ],
  },
];

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
};

app.use(requestLogger);

app.get('/', (request, response) => {
  response.send('<h1>Hello world!</h1>');
});

app.get('/api/products', (request, response) => {
  response.json(products);
});

app.get('/api/products/:id', (request, response) => {
  const id = Number(request.params.id);
  const product = products.find((product) => product.id === id);

  if (product) {
    response.json(product);
  }
  response.status(404).end();
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint ' });
};
app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
