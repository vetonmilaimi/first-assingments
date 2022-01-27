import Card from './Card';

import classes from './Cards.module.css';

const DUMMY_CARDS = [
    {
        id: "1",
        date: "3.3.0 (14/05/2018)",
        what: "New",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    },
    {
        id: "2",
        date: "3.1.0 (20/05/2015)",
        what: "Fix",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    },
    {
        id: "3",
        date: "3.1.0 (20/05/2015)",
        what: "Improvement",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    },
        {
        id: "4",
        date: "3.3.0 (14/05/2018)",
        what: "New",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    },
    {
        id: "5",
        date: "3.1.0 (20/05/2015)",
        what: "Fix",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    },
    {
        id: "6",
        date: "3.1.0 (20/05/2015)",
        what: "Improvement",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    },
        {
        id: "7",
        date: "3.3.0 (14/05/2018)",
        what: "New",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    },
    {
        id: "8",
        date: "3.1.0 (20/05/2015)",
        what: "Fix",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    },
    {
        id: "9",
        date: "3.1.0 (20/05/2015)",
        what: "Improvement",
        name: "Kevin Joe",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur adipiscing consectetur adipiscing elit. In varius faucibus massa, elit. In varius faucibus massa, varius faucibus massa, non commodo mauris luctus ut. consectetur adipiscing elit. In varius faucibus massa, Vestibulum quis mollis sem, vitae placerat nunc."
    }
];

const data = DUMMY_CARDS.map((card) => {
    return <Card key={card.id} date={card.date} what={card.what} name={card.name} description={card.description} />
})

const Cards = () => {
    return (
        <div className={classes.cards}>
            {data}
        </div>
    );
};

export default Cards;