import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import {Notification} from './Notification/Notification'
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'

const App =() => {
 const [feedback, setFeedback] = useState  ({
    good: 0,
    neutral: 0,
    bad: 0,
  });


  const addFeedback = (type) => {
    setFeedback((prevFeedback) => ({
     ...prevFeedback, [type]: prevFeedback[type] + 1,
    }));
  };
    
  
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return parseInt((feedback.good / totalFeedback) * 100);
  };

const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, val) => acc + val, 0);
  };

    const { good, neutral, bad } = feedback;
    const feedbackOptions = { good, neutral, bad };

    return (
      <>
        <Section title={'Please leave feedback'} children>
        <FeedbackOptions options= {feedbackOptions}onLeaveFeedback={addFeedback}/>
{countTotalFeedback() === 0 ? (<Notification message={'There is no feedback'}/> )
      : (<Statistics 
            title={'Statistics'}
            {...feedbackOptions}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />)}
        </Section>
      </>
    );
  }
export default App;
