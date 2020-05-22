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
  },

   postAction(date,id) {
    const habit_id = Number(id);
    let newDate = new Date(date);
    let now = new Date();
    const Hours= now.getUTCHours()
    const day= newDate.getUTCDate();
    const month = newDate.getUTCMonth();
    const year = newDate.getUTCFullYear();
    const utcDate1 = new Date(Date.UTC(year, month, day, Hours, 4, 5));
    const date_created= utcDate1.toISOString()

return fetch(config.API_ENDPOINT+ '/actions', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'authorization': `bearer ${TokenService.getAuthToken()}`,
  },
  body: JSON.stringify({
    date_created: date_created,
    habit_id: habit_id
  }),
})
  .then(res =>
    (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
  )
},

deleteHabit(id) {
  return fetch(config.API_ENDPOINT+ `/habits/${id}`, {
  method: 'DELETE',
  headers: {
    'content-type': 'application/json',
    'authorization': `bearer ${TokenService.getAuthToken()}`,
  },
  })
  .then(res =>
    (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res
  )
  },

  editHabit(habit_name, description, goal,id) {
    return fetch(config.API_ENDPOINT+ `/habits/${id}`, {
      method: 'PATCH',
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
          : res
      )
  },

}

export default HabitsApiService
