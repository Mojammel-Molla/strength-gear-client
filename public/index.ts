import { TeamMember } from '../src/types';

export const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd49_Zg_pTZLHSBene9oUJWZzrC_SCu-vYPA&s',
  'https://st3.depositphotos.com/8742290/17392/i/450/depositphotos_173929874-stock-photo-handsome-model-young-man-training.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO59ORmcsMpEhC4lEQiFRY7VfmWVh07qunJg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgAiPidspKl1zurFKzdiRVet55NFWCGZMiw&s',
  'https://gym-active-store-demo.myshopify.com/cdn/shop/files/instagram6.jpg?v=5993992753790781048',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpy_PTlkJ1AnSidMG0qL4PTvD1qghLfIBZYA&s',
  'https://www.youngisthan.in/wp-content/uploads/2016/09/gym-freak.jpg',
  'https://gym-active-store-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=1068411231891777243',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvSMqZFrhQ-81dHdcfLG87pXQnwLtJta_Kw&s',
  'https://www.shutterstock.com/image-photo/young-adult-bodybuilder-doing-weight-600nw-251273797.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bYJLaXsJC4pqwRhfrWBHKp-urwCzG-jg8JkoKLCq-B5JTyvze8m9FuVtSPi7LKZ28yE&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgy361COmQOVOgAhtbEQ3exwqBBMuLBk7EIFpghNg8-yqCtN-FWFmmlAqbjHE8G9Rcpw&usqp=CAU',

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWYzgcQBkPbIxUotOPwgtrjtSaziGLwsx_g&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwdTVj8PJZY7bBJ9qXG_ivPA9v9I1wlldhg&s',
];

export const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'John has over 20 years of experience in the fitness industry and is passionate about helping people achieve their health goals.',
    image:
      'https://ifcci-events.com/wp-content/uploads/2017/10/speaker3-min.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Marketing Officer',
    bio: 'Jane specializes in strategic marketing and branding, ensuring the company’s products are always at the forefront of the industry.',
    image: 'https://source.unsplash.com/random/200x200?person2',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Trainer',
    bio: 'Michael is a certified fitness trainer with a passion for building personalized workout plans and ensuring top-notch customer satisfaction.',
    image: 'https://source.unsplash.com/random/200x200?person3',
  },
];

export const fakeProducts = [
  { id: 1, name: 'Dumbbells', category: 'Weight Training', price: '$50' },
  { id: 2, name: 'Yoga Mat', category: 'Yoga', price: '$20' },
  { id: 3, name: 'Treadmill', category: 'Cardio', price: '$500' },
  { id: 4, name: 'Exercise Bike', category: 'Cardio', price: '$300' },
  { id: 5, name: 'Kettle bell', category: 'Weight Training', price: '$40' },
  {
    id: 6,
    name: 'Resistance Bands',
    category: 'Fitness Accessories',
    price: '$15',
  },
  { id: 7, name: 'Foam Roller', category: 'Fitness Accessories', price: '$25' },
  { id: 8, name: 'Bench Press', category: 'Weight Training', price: '$150' },
];

export const initialCart = [
  { id: 1, name: 'Dumbbells', price: 50, quantity: 1, stock: 5 },
  { id: 2, name: 'Yoga Mat', price: 20, quantity: 2, stock: 2 },
  { id: 3, name: 'Treadmill', price: 500, quantity: 1, stock: 0 },
];

export const benefits = [
  {
    id: 1,
    title: 'Durability & Strength',
    description:
      'Our gear is made from high-quality, durable materials that last, even under intense use.',
    imageUrl: '/path-to-image-1.jpg',
    altText: 'Durability',
  },
  {
    id: 2,
    title: 'Enhanced Comfort',
    description:
      'Ergonomically designed to provide superior comfort during your workouts, preventing injuries.',
    imageUrl: '/path-to-image-2.jpg',
    altText: 'Comfort',
  },
  {
    id: 3,
    title: 'Versatility',
    description:
      'Ideal for various types of strength training, from power lifting to bodybuilding and more.',
    imageUrl: '/path-to-image-3.jpg',
    altText: 'Versatility',
  },
];
