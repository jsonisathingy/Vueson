import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Vueson from '@/components/vueson/VuesonEditor';

describe('VuesonEditor.vue', () => {
    it('Render Editor editor', () => {
        const wrapper = shallowMount(Vueson);

        expect(wrapper.name()).to.include('Vueson-Editor');
    });
});
