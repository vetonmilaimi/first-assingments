import Button from "../UI/Button";

import classes from './Card.module.css';

const Card = (props) => {
    const what = props.what;
    let whatStyle;
    if (what === 'Fix') {
        whatStyle = classes.fixColor;
    } else if (what === 'Improvement') {
        whatStyle = classes.improvementColor;
    } else {
        whatStyle = '';
    }

    return (
        <div className={classes.card}>
            <p className={classes.date}>{props.date}</p>
            <div className={classes.nameSection}>
                <p className={`${classes.what} ${whatStyle}`}>{props.what}</p>
                <img src="https://st2.depositphotos.com/1531183/5770/v/950/depositphotos_57709697-stock-illustration-male-person-silhouette-profile-picture.jpg" alt="Profile" className={classes.picture} />
                <p className={classes.name}>{props.name}</p>
            </div>
            <p className={classes.description}>{props.description}</p>
            <Button name="Download" type="button" />
        </div>
    );
};

export default Card;