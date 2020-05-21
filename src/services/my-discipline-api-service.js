import config from '../config';
import TokenService from './token-service';

const HabitsApiService = {
    getHabits() {
        return fetch(config.API_ENDPOINT+ '/habits', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
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
                'Authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },

       postHabit(habit_name, description, goal) {
    return fetch(config.API_ENDPOINT+ '/habits', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        habit_name: habit_name,
        goal: goal,
        description: description,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }

}

export default HabitsApiService
