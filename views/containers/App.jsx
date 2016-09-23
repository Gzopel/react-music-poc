import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Analyser, Song, Sequencer, Sampler, Synth } from 'react-music';
import Polysynth from './Polysynth';
import Visualization from './Visualization';
import DrumController from './DrumController';

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.handleAudioProcess = this.handleAudioProcess.bind(this);
  }
  handleAudioProcess(analyser) {
    this.visualization.audioProcess(analyser);
  }

  render() {
    return (
      <div>
        <Song
          playing={this.props.song.playing}
          tempo={this.props.song.tempo}
          >
          <Analyser onAudioProcess={this.handleAudioProcess}>
            <Sequencer
              resolution={this.props.drums.resolution}
              bars={this.props.drums.bars}
              >
              <Sampler
                sample='samples/kick.wav'
                steps={this.props.drums.kickSteps}
                />
              <Sampler
                sample='samples/snare.wav'
                steps={this.props.drums.snareSteps}
                />
            </Sequencer>
          </Analyser>
        </Song>
        <DrumController />
        <Visualization ref={(c) => { this.visualization = c; }} />
      </div>
    );
  }
}


AppComponent.propTypes = {
  song: React.PropTypes.shape({
    tempo: React.PropTypes.number,
    playing: React.PropTypes.bool,
  }),
  drums: React.PropTypes.shape({
    bars: React.PropTypes.number,
    resolution: React.PropTypes.number,
    kickSteps: React.PropTypes.array,
    snareSteps: React.PropTypes.array,
  }),
};

const mapStateToProps = (state) => {
  return {
    drums: state.drums.config,
    song: state.song.config,
  };
};

const App = connect(mapStateToProps)(AppComponent);


export default App;