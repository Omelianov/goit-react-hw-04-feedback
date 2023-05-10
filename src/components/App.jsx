import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import {Notification} from './Notification/Notification'
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  addFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
    
  

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = { good, neutral, bad };

    return (
      <>
        <Section title={'Please leave feedback'} children>
        <FeedbackOptions options= {feedbackOptions}onLeaveFeedback={this.addFeedback}/>
{this.countTotalFeedback() === 0 ? (<Notification message={'There is no feedback'}/> )
      : (<Statistics 
            title={'Statistics'}
            {...feedbackOptions}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />)}
        </Section>
      </>
    );
  }
}
export default App;
