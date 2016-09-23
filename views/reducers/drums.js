export const initialState = {
  config: {
    bars :1,
    resolution :12,
    kickSteps:[0, 2, 8, 10],
    snareSteps:[4, 12],
  }
};

export const drums = (state = initialState, action) => {
  switch (action.type) {
    case 'toogleStep':
      const steps = {};
      const index = state.config[action.stepType].indexOf(action.key);
      steps[action.stepType] = index>-1?
        state.config[action.stepType].filter((x)=>x!=action.key):
        state.config[action.stepType].concat(action.key);
      return {
        config:{
          ...state.config,
          ...steps,
        }
      };
    default:
      return state;
  }
};

export default drums;
