import React from 'react';
import { connect } from 'react-redux';

class DrumsComponent extends React.Component {
  buttons = (type) => {
    return Array.apply(this,Array(this.props.drums.resolution+1)).map((empty, key) =>
      <button
        className={'drums-controller-button' + (this.props.drums[type + 'Steps'].indexOf(key)>-1 ? '-pressed' : '')}
        type='button'
        onClick={()=>{this.props.dispatch({type:'toogleStep',stepType:type+'Steps',key:key})}}
        >
        {key}
      </button>
    );
  };

  render = () => {
    return (
      <div className='drums_controller_container'>
        <lu>
          <li>
            <h3>Kick</h3>
            { this.buttons('kick') }
          </li>
          <li>
            <h3>Snare</h3>
            { this.buttons('snare') }
          </li>
        </lu>
      </div>
    );
  }
}

DrumsComponent.propTypes = {
  dispatch: React.PropTypes.func,
  drums: React.PropTypes.shape({
    resolution: React.PropTypes.number,
    bars: React.PropTypes.number,
    kickSteps: React.PropTypes.array,
    snareSteps: React.PropTypes.array,
  }),
};


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    drums: state.drums.config,
  };
};

const DrumController = connect(
  mapStateToProps,
  mapDispatchToProps)(DrumsComponent);


export default DrumController;
