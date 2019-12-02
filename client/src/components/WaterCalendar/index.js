import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
 
// not actually sure how to pass props through this
class WaterCalendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
  // onChange = (props) => this.setState({ date }).then.onClickDay();
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default WaterCalendar;