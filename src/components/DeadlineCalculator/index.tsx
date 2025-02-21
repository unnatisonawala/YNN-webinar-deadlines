import React, { useState } from 'react';
import './styles.css';

interface Deadlines {
  initialPlan: Date;
  reminderEmail: Date;
  informationRequest: Date;
  marketingStart: Date;
  reminder: Date;
  followUp: Date;
}

export const DeadlineCalculator: React.FC = () => {
  const [webinarDate, setWebinarDate] = useState<string>('');
  const [deadlines, setDeadlines] = useState<Deadlines | null>(null);

  const calculateDeadlines = (date: Date): Deadlines => {
    const initialPlan = new Date(date);
    initialPlan.setDate(date.getDate() - 90); // 12 weeks before
 
    const reminderEmail = new Date(date);
    reminderEmail.setDate(date.getDate() - 76); // 10 weeks before 

    const informationRequest = new Date(date);
    informationRequest.setDate(date.getDate() - 76); // 10 weeks before 

    const marketingStart = new Date(date);
    marketingStart.setDate(date.getDate() - 42); // 6 weeks before

  

    const reminder = new Date(date);
    reminder.setDate(date.getDate() - 7); // 1 week before

    const followUp = new Date(date);
    followUp.setDate(date.getDate() + 1); // 1 day after

    return { initialPlan, reminderEmail, informationRequest, marketingStart, reminder, followUp };
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWebinarDate(e.target.value);
    const date = new Date(e.target.value);
    setDeadlines(calculateDeadlines(date));
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="calculator-container">
      <h1>Webinar Deadline Calculator</h1>
      
      <div className="input-section">
        <label htmlFor="webinar-date">Webinar Date:</label>
        <input
          type="date"
          id="webinar-date"
          value={webinarDate}
          onChange={handleDateChange}
        />
      </div>

      {deadlines && (
        <div className="results-section">
          <h2>Key Deadlines:</h2>
          <div className="deadline-item">
            <span className="deadline-label">Make initial plans (3 months before):</span>
            <span className="deadline-date">{formatDate(deadlines.initialPlan)}</span>
            <ul className="deadline-description">
              <li>Decide topic + date of webinar and  two potential speakers (also, have 1-2 alternate speakers on list in case the first set of speakers are not able to attend)</li>
              <li>Assign two people responsible for organization</li>
              <li>Email speakers with invitation</li>
              <li>Send reminder to speakers 1 week later with a deadline of one more week</li>
            </ul>
          </div>
          <div className="deadline-item">
            <span className="deadline-label">Email alternate speakers (2.5 months before):</span>
            <span className="deadline-date">{formatDate(deadlines.reminderEmail)}</span>
            <ul className="deadline-description">
              <li>If speakers cannot make it or have not responded to two rounds of email in the last two weeks, email alternate speakers</li>
            </ul>
          </div>
          <div className="deadline-item">
            <span className="deadline-label">Speaker information (2 months before):</span>
            <span className="deadline-date">{formatDate(deadlines.informationRequest)}</span>
            <ul className="deadline-description">
              <li>Request information from speakers 1. Title + Abstract 2. Picture</li>
              <li>Follow similar protocol as initial invitation (give the speakers 1 week to respond, send reminder with a deadline of 1 week the second time)</li>
            </ul>
          </div>
          <div className="deadline-item">
            <span className="deadline-label">Start Marketing (1.5 months before):</span>
            <span className="deadline-date">{formatDate(deadlines.marketingStart)}</span>
            <ul className="deadline-description">
              <li>Begin promoting the webinar to attract attendees.</li>
              <li>Start preparing poster to send out </li>
              <li>Generate zoom link</li>
              <li>Share poster on social media and send email to YNN members with registration links</li>
            </ul>
          </div>
        
          <div className="deadline-item">
            <span className="deadline-label">Send Reminder:</span>
            <span className="deadline-date">{formatDate(deadlines.reminder)}</span>
            <ul className="deadline-description">
              <li>Re-share information on social media + any other channels of interest</li>
            </ul>
          </div>
          <div className="deadline-item">
            <span className="deadline-label">Follow-up:</span>
            <span className="deadline-date">{formatDate(deadlines.followUp)}</span>
          </div>
        </div>
      )}
    </div>
  );
};
