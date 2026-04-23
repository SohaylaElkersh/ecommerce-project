import { shallowMount } from '@vue/test-utils'
import SortingSelect from '@/components/products/SortingSelect.vue'

describe('SortingSelect.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SortingSelect, {
      props: {
        value: 'nothing'
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders label correctly', () => {
    expect(wrapper.find('.sort-select__label').text()).toBe('Sort By:')
  })

  it('renders all sort options', () => {
    const options = wrapper.findAll('option')
    expect(options.length).toBe(8)
  })

  it('has correct default selected value', () => {
    const select = wrapper.find('select')
    expect(select.element.value).toBe('nothing')
  })

  it('emits input event when selection changes', async () => {
    const select = wrapper.find('select')
    await select.setValue('priceLowHigh')
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toEqual(['priceLowHigh'])
  })

  it('renders correct option labels', () => {
    const options = wrapper.findAll('option')
    expect(options.at(0).text()).toBe('Default')
    expect(options.at(1).text()).toBe('Highest Rating')
    expect(options.at(2).text()).toBe('Price: Low to High')
  })
})