import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Button.vue', () => {
  it('passes this test', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.text()).toMatch('My button')
  })
})
