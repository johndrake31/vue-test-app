
import HomePage from '@/components/HomePage.vue'

describe('HomePage.vue', () => {
  it('has data', () => {
    HomePage.data.msg = 'Food List'
    
    expect(typeof HomePage.data.msg ).toBe('string')
    
  })

})


