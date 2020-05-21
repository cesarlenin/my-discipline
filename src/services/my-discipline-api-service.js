import config from '../config';
// import TokenService from './token-service';

const HabitsApiService = {
    getHabits() {
        return fetch(config.API_ENDPOINT+ '/habits', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            },
        })
          .then(res =>
             (!res.ok)
               ? res.json().then(e => Promise.reject(e))
               : res.json()
            )
      },
      getActions() {
        return fetch(config.API_ENDPOINT+ '/actions', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      }
}

export default HabitsApiService
