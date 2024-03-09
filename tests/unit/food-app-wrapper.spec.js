import { shallowMount } from "@vue/test-utils";
import FoodWrapper from '@/components/FoodWrapper.vue';

describe('FoodWrapper.vue', () => {
    it('renders correct Title and Subtitle', ()=>{
        const title = "This is a title";
        const subTitle = "This is a subtitle";
        const wrapper = shallowMount(FoodWrapper, {
            propsData: {title, subTitle},
            stubs: ['router-link']
        })
        expect( wrapper.text()).toMatch(title)
        expect( wrapper.text()).toMatch(subTitle)
    })
})