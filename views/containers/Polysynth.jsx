import React, { PropTypes } from 'react';

import { Delay, MoogFilter, Reverb, Synth} from 'react-music';

const Polysynth = (props) => (
  <Delay>
    <Reverb>
      <Synth
        type="sine"
        gain={0.15}
        steps={props.steps}
        />
      <MoogFilter bufferSize={4096}>
        <Synth
          type="square"
          gain={0.15}
          transpose={1}
          steps={props.steps}
          />
      </MoogFilter>
    </Reverb>
  </Delay>
);

Polysynth.propTypes = {
  steps: PropTypes.array,
};

export default Polysynth;

/*
 <Sequencer
 resolution={16}
 bars={2}
 >
 <Polysynth
 steps={[
 [0, 1, ['c3', 'd#3', 'g3' ]],
 [2, 1, ['c4']],
 [8, 1, ['c3', 'd#3', 'g3']],
 [10, 1, ['c4']],
 [12, 1, ['c3', 'd#3', 'g3']],
 [14, 1, ['d#4']],
 [16, 1, ['f3', 'g#3', 'c4']],
 [18, 1, ['f3', 'g#3', 'c4']],
 [24, 1, ['f3', 'g#3', 'c4']],
 [26, 1, ['f3', 'g#3', 'c4']],
 [28, 1, ['f3', 'g#3', 'c4']],
 [30, 1, ['f3', 'g#3', 'c4']],
 ]}
 />
 </Sequencer>
 <Sequencer
 resolution={16}
 bars={2}
 >
 <Synth
 type="sine"
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