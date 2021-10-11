import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Index, {
      data() {
        return {
          jsonData: { messages: [] },
        }
      },
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('check postMessage calls method filterMessages', () => {
    wrapper.vm.filterMessages = jest.fn()
    wrapper.vm.postMessage()
    expect(wrapper.vm.filterMessages).toHaveBeenCalled()
  })

  test('check selectUser calls method filterMessages', () => {
    wrapper.vm.filterMessages = jest.fn()
    wrapper.vm.selectUser('')
    expect(wrapper.vm.filterMessages).toHaveBeenCalled()
  })

  test('check onUnfollow calls method filterMessages', () => {
    wrapper.vm.filterMessages = jest.fn()
    wrapper.vm.spliceUser = jest.fn()
    wrapper.vm.onUnfollow()
    expect(wrapper.vm.filterMessages).toHaveBeenCalled()
  })

  test('check onFollow calls method filterMessages', () => {
    wrapper.vm.filterMessages = jest.fn()
    wrapper.vm.spliceUser = jest.fn()
    wrapper.vm.onFollow()
    expect(wrapper.vm.filterMessages).toHaveBeenCalled()
  })
})
