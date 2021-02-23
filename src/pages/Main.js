import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Switcher from '../components/Switcher/Swithcer';

import './Main.css';

function MainPage({ mode }) {
  return (
    <div className={`container ${mode === 'light' ? 'light' : 'dark'}`}>
      <Switcher />
    </div>
  );
}

export default compose(
  connect(state => ({
    mode: state.switcher.mode,
  })),
)(MainPage);
