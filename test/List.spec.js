import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'

describe('NuxtLogo', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(List, {})
  })

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('check onClick method emit the event follow-unfollow', () => {
    wrapper.vm.onClick()
    expect(wrapper.emitted()['follow-unfollow']).toBeTruthy()
  })

  test('check watcher headers', async () => {
    const TEST_USER = 'test'
    wrapper.setData({ selectedUser: TEST_USER })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$emit('selected-user', TEST_USER))
  })

  test('returns "false" because users has data', () => {
    wrapper.setProps({ users: null })

    expect(wrapper.vm.noData).toBeTruthy()
  })
})
