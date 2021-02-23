import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleColorMode as toggleColorModeAction } from '../../redux/switcherReducer/switcherReducer';

function Switcher({ mode, toggleColorMode }) {
  return (
    <button
      onClick={() => toggleColorMode(mode === 'light' ? 'dark' : 'light') }
    >
      {mode}
    </button>
  );
}

export default compose(
  connect(state => ({
    mode: state.switcher.mode,
  }), { toggleColorMode: toggleColorModeAction }),
)(Switcher);
