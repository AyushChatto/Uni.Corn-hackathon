import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import React, { Component } from "react";

class Lifeline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="Army"
    style={{ color: '#e86971' }}
  >
    <h4>Investment </h4>
    <p>
      Exchange-traded Fund (ETF). Examples are SPDR S&P 500 & SPDR Strait Times Index. Low starting point, low risk. Very good start to investment.
        To learn more: <br/>
        <a href="https://www.dbs.com.sg/personal/articles/saving-investing/beginners-guide-to-etfs-part1"> Basic </a> <br/>
        <a href="https://www.dbs.com.sg/personal/articles/saving-investing/beginners-guide-to-etfs-part2">Advanced </a><br/>
    </p>
    <h4>Insurance</h4>
      <p>
          Chubbs-Personal Liability Insurance <br/>
          To learn more: <a href="https://www.chubb.com/sg-en/personal/personal-liability-insurance.aspx"> Click Here </a> <br/>
          Chubbs-Personal Accident Insurance
          To learn more: <a href="https://www.chubb.com/sg-en/personal/personal-accident-insurance.aspx"> Click Here </a> <br/>
    </p>
  </TimelineItem>
    <TimelineItem
    key="002"
    dateText="Higher Education"
    style={{ color: '#e86971' }}
  >
    <h4>Loan </h4>
    <p>
        DBS Study Loan <br/>
        To learn more: <a href="https://www.dbs.com.sg/personal/loans/education-loans/study-loan"> Click Here </a> <br/>
        DBS Tuition Fee Loan
        To learn more: <a href="https://www.dbs.com.sg/personal/loans/education-loans/tuition-fee-loan"> Click Here </a> <br/>
    </p>
    <h4>Insurance</h4>
      <p>
          Traveller Shield Plus <br/>
          To learn more: <a href="https://www.dbs.com.sg/personal/insurance/travel/travellershield-plus"> Click Here </a> <br/>
          Overseas Student Protect
          To learn more: <a href="https://www.dbs.com.sg/personal/insurance/travel/overseas-student-protect"> Click Here </a> <br/>
    </p>
  </TimelineItem>
    <TimelineItem
    key="002"
    dateText="Working Life"
    style={{ color: '#e86971' }}
  >
    <h4>Credit </h4>
    <p>
        DBS Live Fresh Care <br/>
        To learn more: <a href="https://www.dbs.com.sg/personal/loans/education-loans/study-loan"> Click Here </a> <br/>
        DBS Everyday Card <br/>
        To learn more: <a href="https://www.dbs.com.sg/personal/loans/education-loans/study-loan"> Click Here </a> <br/>
        Multiplier Accounts
        To learn more: <a href="https://www.dbs.com.sg/personal/loans/education-loans/tuition-fee-loan"> Click Here </a> <br/>
    </p>
    <h4>Insurance</h4>
      <p>
          DBS Car Insurance <br/>
          To learn more: <a href="https://www.dbs.com.sg/personal/insurance/travel/travellershield-plus"> Click Here </a> <br/>
          DBS Easy Protect
          To learn more: <a href="https://www.dbs.com.sg/personal/insurance/travel/overseas-student-protect"> Click Here </a> <br/>
    </p>
        <h4>Investment</h4>
      <p>
          Unit Trust <br/>
          To learn more: <a href="https://www.dbs.com.sg/personal/insurance/travel/travellershield-plus"> Click Here </a> <br/>
    </p>
  </TimelineItem>
</Timeline>
        );
    }
}

export default Lifeline;
