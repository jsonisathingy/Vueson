import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Vueson from '@/components/vueson';

describe('Vueson.vue', () => {
    it('Render Vueson editor', () => {
        const wrapper = shallowMount(Vueson);

        expect(wrapper.name()).to.include('Vueson');
    });
});
