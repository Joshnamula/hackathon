import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import CardContent from './CardContent';
import Button from './Button';

const CategoryCard = ({ title, link }) => (
  <Card className="card">
    <CardContent>
      <h2>{title}</h2>
      {link ? (
        <Link to={link}>
          <Button>Click Here ↗</Button>
        </Link>
      ) : (
        <Button>Learn More</Button>
      )}
    </CardContent>
  </Card>
);

export default CategoryCard;
