export const initialState = {
  config: {
    bars :1,
    resolution :12,
    kickSteps:[],
    snareSteps:[],
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
