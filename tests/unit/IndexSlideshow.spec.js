import { shallowMount } from '@vue/test-utils'
import IndexSlideshow from '@/components/IndexSlideshow.vue'

// IMPDEV: Example test, with more advanced functionality more can be included
describe('IndexSlideshow.vue', () => {
  it('increments currentImage when nextImage is called', () => {
    const wrapper = shallowMount(IndexSlideshow)
    expect(wrapper.vm.currentImage).toBe(0)
    
    wrapper.vm.nextImage()
    expect(wrapper.vm.currentImage).toBe(1)
  })
})