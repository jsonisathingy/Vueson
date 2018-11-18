import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import StringDisplay from '@/components/vueson/renderers/StringDisplay';

describe('StringDisplay.vue', () => {
    it('Render String Renderer', () => {
        const wrapper = shallowMount(StringDisplay);

        expect(wrapper.name()).to.include('String-Display');
    });
});
