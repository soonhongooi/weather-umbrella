export const state = () => ({
  forecast: null
})

export const getters = {
  get(state) {
    return state.forecast
  }
}

export const mutations = {
  SET_FORECAST(state, forecast) {
    state.forecast = forecast
  }
}

export const actions = {
  async search({ commit }, payload) {
    const url =
      payload.lat === undefined && payload.lon === undefined
        ? 'https://api.openweathermap.org/data/2.5/weather?q=' +
          payload.city +
          '&appid=f75114e15e7c88a9539a5e76f0876982&units=metric'
        : 'https://api.openweathermap.org/data/2.5/weather?lat=' +
          payload.lat +
          '&lon=' +
          payload.lon +
          '&appid=f75114e15e7c88a9539a5e76f0876982&units=metric'
    await this.$axios
      .get(url)
      .then(function(response) {
        commit('SET_FORECAST', response.data)
      })
      .catch(function() {
        commit('SET_FORECAST', { RESULT: 'NOT_FOUND' })
      })

    // commit('SET_FORECAST', result.data)
  }
}
