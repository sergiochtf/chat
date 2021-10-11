import { shallowMount } from '@vue/test-utils'
import Editor from '@/components/Editor.vue'

describe('NuxtLogo', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Editor, {})
  })

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('check onClickPost method emit the event post-message', () => {
    wrapper.vm.onClickPost()
    expect(wrapper.emitted()['post-message']).toBeTruthy()
  })
})
