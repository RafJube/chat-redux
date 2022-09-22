export default function(state = null, action) {
  switch (action.type) {
    case 'CHANNEL_CREATED': {
      const newChannels = state.slice(0);
      newChannels.push(action.payload);
      return newChannels;
    }
    default:
      return state;
  }
}
