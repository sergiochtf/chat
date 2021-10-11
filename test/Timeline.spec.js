import { shallowMount } from '@vue/test-utils'
import prettyMilliseconds from 'pretty-ms'
import Timeline from '@/components/Timeline.vue'

jest.mock('pretty-ms')

prettyMilliseconds.mockImplementation()

describe('NuxtLogo', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Timeline, {})
  })

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('check formatTimestampDate method calls prettyMilliseconds', () => {
    wrapper.vm.formatTimestampDate()
    expect(prettyMilliseconds).toHaveBeenCalled()
  })
})
