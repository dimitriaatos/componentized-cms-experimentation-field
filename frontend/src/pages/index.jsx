import { lazy } from 'react';

// Pages
const About = lazy(() => import('./About'))
const Portfolio = lazy(() => import('./Portfolio'))
const Contact = lazy(() => import('./Contact'))

export const pages = [
  { id: 'about', name: 'About', render: About },
  { id: 'portfolio', name: 'Portfolio', render: Portfolio },
  { id: 'contact', name: 'Contact', render: Contact }
];
 export default pages