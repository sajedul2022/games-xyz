import axios from 'axios';

// We've been using this method in previos steps
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const fetchUser = userId => {
  return axios.get(`/api/users/show/${userId}`)
}

// agent  Balance Transfer 

export const agent_transfer = (agentData) => {
  return axios.post('/api/agent/agent_transfer', agentData);
};

export const getdataAgent = (getdataAgent) => {
  return axios.get('/api/agent/getdataAgent', getdataAgent);
};

// export const getdata = agentId => {
//   return axios.get(`/api/agent/getdata`);
// }


// User Balance Transfer 

export const user_transfer = (userData) => {
  return axios.post('/api/agent/user_transfer', userData);
};

export const agent_transfer_update = (agent_transfer_update) => {
  return axios.post('/api/agent/agent_transfer_update', agent_transfer_update);
};

export const getdataUser = (getdataUser) => {
  return axios.get('/api/agent/getdataUser', getdataUser);
};

export const user_transfer_update = (user_transfer_update) => {
  return axios.get('/api/agent/user_transfer_update', user_transfer_update);
};

// User jsonWebToken Info

// export const user_jwtinfo = (user_jwtinfo) => {
//   return axios.get('/api/agent/user_jwtinfo', user_jwtinfo);
// };