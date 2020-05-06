import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Forecast from '@/components/Forecast'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Forecast empty getters', () => {
  test('nothing is shown if data is null', () => {
    const getters = {
      get: () => null
    }

    const store = new Vuex.Store({
      getters
    })

    const wrapper = shallowMount(Forecast, { store, localVue })

    expect(wrapper.contains('#city')).toBeFalsy()
  })

  test('show not found message when there is no data', () => {
    const getters = {
      get: () => {
        return {
          RESULT: 'NOT_FOUND'
        }
      }
    }

    const store = new Vuex.Store({
      getters
    })

    const wrapper = shallowMount(Forecast, { store, localVue })

    expect(wrapper.contains('#not-found')).toBeTruthy()
  })
})

describe('Forecast', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      get: () => {
        return {
          name: 'Sicily',
          main: {
            temp: 11,
            temp_min: 12,
            temp_max: 13
          },
          weather: [
            {
              main: 'Sunny',
              description: 'Possible hailstorm'
            }
          ]
        }
      }
    }

    store = new Vuex.Store({
      getters
    })
  })

  test('town is Sicily', () => {
    const wrapper = shallowMount(Forecast, { store, localVue })

    const e = wrapper.find('#city')
    expect(e.text()).toBe('Sicily')
  })

  test('main temperature is 11 degrees celcius', () => {
    const wrapper = shallowMount(Forecast, { store, localVue })

    const e = wrapper.find('#temp')
    expect(e.text()).toBe('11°C')
  })

  test('minimum temperature is 12 degrees celcius', () => {
    const wrapper = shallowMount(Forecast, { store, localVue })

    const e = wrapper.find('#min-temp')
    expect(e.text()).toBe('12°C')
  })

  test('maximum temperature is 13 degrees celcius', () => {
    const wrapper = shallowMount(Forecast, { store, localVue })

    const e = wrapper.find('#max-temp')
    expect(e.text()).toBe('13°C')
  })

  test('weather is sunny', () => {
    const wrapper = shallowMount(Forecast, { store, localVue })

    const e = wrapper.find('#weather-main')
    expect(e.text()).toBe('Sunny')
  })

  test('weather description is hailstorm', () => {
    const wrapper = shallowMount(Forecast, { store, localVue })

    const e = wrapper.find('#weather-desc')
    expect(e.text()).toBe('Possible hailstorm')
  })
})
