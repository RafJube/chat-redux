export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES': {
      return action.payload.messages;
    }
    case 'MESSAGE_POSTED': {
      const newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    }
    default:
      return state;
  }
}
