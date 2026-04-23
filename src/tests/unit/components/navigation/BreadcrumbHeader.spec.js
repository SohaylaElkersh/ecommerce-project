import { shallowMount } from '@vue/test-utils'
import BreadcrumbHeader from '@/components/navigation/BreadcrumbHeader.vue'

const factory = (route = {}) => {
  return shallowMount(BreadcrumbHeader, {
    global: {
      mocks: {
        $route: {
          path: '/',
          name: '',
          query: {},
          ...route
        }
      },
      stubs: {
        RouterLink: true
      }
    }
  })
}

describe('BreadcrumbHeader.vue', () => {
  it('renders Home link always', () => {
    const wrapper = factory()
    expect(wrapper.find('.breadcrumb__link').text()).toBe('Home')
  })

  it('returns empty breadcrumb when root path', () => {
    const wrapper = factory({ path: '/' })
    expect(wrapper.vm.breadcrumbItems.length).toBe(0)
  })

  it('handles normal multi-segment path', () => {
    const wrapper = factory({ path: '/shop/shoes' })
    const items = wrapper.vm.breadcrumbItems
    expect(items.length).toBe(2)
    expect(items[0].label).toBe('Shop')
    expect(items[1].label).toBe('Shoes')
    expect(items[1].isCurrent).toBe(true)
  })

  it('formats labels correctly (slug cleanup)', () => {
    const wrapper = factory({ path: '/my-awesome_product' })
    const items = wrapper.vm.breadcrumbItems
    expect(items[0].label).toBe('My Awesome Product')
  })

  it('handles product route with query breadcrumb', () => {
    const wrapper = factory({
      path: '/product/iphone-15',
      query: {
        breadcrumb: 'mobile-phones',
        breadcrumbTo: '/category/mobile'
      }
    })
    const items = wrapper.vm.breadcrumbItems
    expect(items[0].label).toBe('Mobile Phones')
    expect(items[0].to).toBe('/category/mobile')
    expect(items[1].label).toBe('Iphone 15')
    expect(items[1].isCurrent).toBe(true)
  })

  it('falls back to /explore when breadcrumbTo is invalid', () => {
    const wrapper = factory({
      path: '/product/test-item',
      query: {
        breadcrumb: 'electronics',
        breadcrumbTo: null
      }
    })
    expect(wrapper.vm.breadcrumbItems[0].to).toBe('/explore')
  })

  it('handles NotFound route', () => {
    const wrapper = factory({
      path: '/unknown-page',
      name: 'NotFound'
    })
    const items = wrapper.vm.breadcrumbItems
    expect(items.length).toBe(1)
    expect(items[0].label).toBe('Not Found')
    expect(items[0].isCurrent).toBe(true)
  })

  it('handles encoded URI segments', () => {
    const wrapper = factory({
      path: '/category/men%20shoes'
    })
    const items = wrapper.vm.breadcrumbItems
    expect(items[1].label).toBe('Men Shoes')
  })
})