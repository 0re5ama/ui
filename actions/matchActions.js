import fetch from 'isomorphic-fetch';
import { HOST_URL } from '../actions';

const url = '/api/matches/';

const REQUEST = 'yasp/match/REQUEST';
const OK = 'yasp/match/OK';
const ERROR = 'yasp/match/ERROR';

export const matchActions = {
  REQUEST,
  OK,
  ERROR
};

const getMatchRequest = () => ({ type: REQUEST });

const getMatchOk = (payload) => ({
  type: OK,
  payload
})

const getMatchError = (payload) => ({
  type: ERROR,
  payload
});

export const getMatch = (match_id, host=HOST_URL) => {
  return (dispatch) => {
    return fetch(`${host}${url}/${match_id}`)
      .then(response => response.json())
      .then(json => dispatch(getMatchOk(json)))
      .catch(error => dispatch(getMatchError()));
  };
};