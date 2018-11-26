import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import NumberDisplay from '@/components/vueson/renderers/NumberDisplay';

describe('NumberDisplay.vue', () => {
    it('Render Number Renderer', () => {
        const wrapper = shallowMount(NumberDisplay);

        expect(wrapper.name()).to.include('Number-Display');
    });
});
