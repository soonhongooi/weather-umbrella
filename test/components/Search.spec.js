import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Search from '@/components/Search'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      search: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('calls store action "actionClick" when button is clicked', () => {
    const wrapper = shallowMount(Search, { store, localVue })

    const input = wrapper.find('#city')
    input.element.value = 'London'

    wrapper.find('button').trigger('submit')
    expect(actions.search).toHaveBeenCalled()
  })
})
