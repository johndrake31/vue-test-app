import { shallowMount } from "@vue/test-utils";
import BlogViewWidget from '@/components/BlogViewWidget.vue';

describe('BlogViewWidget.vue', ()=>{
    it('renders with correct text', ()=>{
        const wrapper = shallowMount(BlogViewWidget, {})
        expect(wrapper.text()).toMatch('blogstuff')
    })
})