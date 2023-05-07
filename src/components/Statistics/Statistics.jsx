import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ title, good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <h3 className={css.title}>{title}</h3>
            <ul className={css.list}>
                <li className={css.listItem}>Good: {good}</li>
                <li className={css.listItem}>Neutral: {neutral}</li>
                <li className={css.listItem}>Bad: {bad}</li>
                <li className={css.listItem}>Total: {total()}</li>
                <li className={css.listItem}>Positive feedback: {positivePercentage()}%</li>
            </ul>
        </>
    );
};


Statistics.propTypes = {
    positivePercentage: PropTypes.func.isRequired,
    total: PropTypes.func.isRequired
}