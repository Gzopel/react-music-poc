import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Analyser, Song, Sequencer, Sampler, Synth, Chorus, Reverb, LFO, MoogFilter } from 'react-music';
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
                steps={this.props.drums.kickSteps}// 0 2 6 7
                />
              <Sampler
                sample='samples/snare.wav'
                steps={this.props.drums.snareSteps} // 3 5 9
                />
            </Sequencer>

            <Sequencer
              resolution={16}
              bars={1}
              >
              <Synth
                type="sine"

                steps={[
                 [0, 4, 'c3'],
                 [4, 2, 'c3'],
                 [6, 2, 'd#3'],
                 [8, 4, 'f3'],
                 [12, 4, 'f2'],
                 ]}
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

/*
 <Sequencer
 resolution={16}
 bars={2}
 >
 <Synth
 type="square"
 envelope={
 {
 attack:0.05,
 sustain:0.3
 }
 }
 steps={[
 [0, 8, 'c2'],
 [8, 4, 'c2'],
 [12, 4, 'd#2'],
 [16, 8, 'f2'],
 [24, 8, 'f1'],
 ]}
 />
 </Sequencer>
* */