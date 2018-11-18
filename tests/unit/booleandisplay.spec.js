import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BooleanDisplay from '@/components/vueson/renderers/BooleanDisplay';

describe('BooleanDisplay.vue', () => {
    it('Render Boolean Renderer', () => {
        const wrapper = shallowMount(BooleanDisplay);

        expect(wrapper.name()).to.include('Boolean-Display');
    });
});
