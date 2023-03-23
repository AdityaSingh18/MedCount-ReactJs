import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Paracetamol',
    description: 'For Your Fever',
    price: 22.99,
    count:100
  },
  {
    id: 'm2',
    name: 'Crocin',
    description: 'one Cure for all',
    price: 16.5,
    count:30
  },
  {
    id: 'm3',
    name: 'DeCold',
    description: 'feeling cold? try this',
    price: 12.99,
    count:50
  },
  
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      count={meal.count}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
