export function fetchMessages(channel) {
  let url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const promise = fetch(url).then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  let url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const body = { author: author, content: content };
  const promise = fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}).then(r => r.json());

  return {
    type: 'MESSAGE_POSTED',
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: 'CHANNEL_SELECTED',
    payload: channel
  };
}

export function createChannel(channel) {
  return {
    type: 'CHANNEL_CREATED',
    payload: channel
  };
}
