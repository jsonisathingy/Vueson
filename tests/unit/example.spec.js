import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Example from '@/components/Example.vue';

describe('Example.vue', () => {
  it('Render example component', () => {
    const wrapper = shallowMount(Example);

    expect(wrapper.name()).to.include('Example');
  })
})
