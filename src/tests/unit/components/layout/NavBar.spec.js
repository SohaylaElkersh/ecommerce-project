import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import AppNavbar from '@/components/layout/Navbar.vue'

describe('AppNavbar.vue', () => {
  const factory = (cartCount = 3) => {
    const wrapper = shallowMount(AppNavbar, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: jest.fn,
            initialState: {
              cart: {
                cartItemCount: cartCount
              }
            }
          })
        ],
        stubs: {
          SliderCart: {
            template: '<div class="slider-cart-stub" />'
          },
          BaseInput: true,
          RouterLink: true
        }
      }
    })
    return wrapper
  }

  it('renders navigation links', () => {
    const wrapper = factory()
    const links = wrapper.vm.navLinks
    expect(links.length).toBe(4)
    expect(links[0].name).toBe('Home')
  })

  it('shows cart item count badge when items exist', () => {
    const wrapper = factory(5)
    expect(wrapper.find('.navbar__cart-badge').text()).toBe('5')
  })

  it('does NOT show cart badge when cart is empty', () => {
    const wrapper = factory(0)
    expect(wrapper.find('.navbar__cart-badge').exists()).toBe(false)
  })

  it('opens cart when cart button is clicked', async () => {
    const wrapper = factory()
    await wrapper.find('.navbar__cart').trigger('click')
    expect(wrapper.vm.cartOpen).toBe(true)
    expect(wrapper.find('.slider-cart-stub').exists()).toBe(true)
  })

  it('closes cart when closeCart is called', async () => {
    const wrapper = factory()
    wrapper.vm.openCart()
    await wrapper.vm.$nextTick()
    wrapper.vm.closeCart()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.cartOpen).toBe(false)
  })

  it('adds and removes ESC key listener', async () => {
    const addSpy = jest.spyOn(document, 'addEventListener')
    const removeSpy = jest.spyOn(document, 'removeEventListener')
    const wrapper = factory()
    wrapper.vm.openCart()
    await wrapper.vm.$nextTick()
    expect(addSpy).toHaveBeenCalledWith('keydown', wrapper.vm.onEscape)
    wrapper.vm.closeCart()
    await wrapper.vm.$nextTick()
    expect(removeSpy).toHaveBeenCalledWith('keydown', wrapper.vm.onEscape)
  })

  it('closes cart on ESC key press', async () => {
    const wrapper = factory()
    wrapper.vm.openCart()
    await wrapper.vm.$nextTick()
    wrapper.vm.onEscape({ key: 'Escape' })
    expect(wrapper.vm.cartOpen).toBe(false)
  })

  it('does not close cart on other keys', async () => {
    const wrapper = factory()
    wrapper.vm.openCart()
    await wrapper.vm.$nextTick()
    wrapper.vm.onEscape({ key: 'Enter' })
    expect(wrapper.vm.cartOpen).toBe(true)
  })

  it('toggles body class when cart opens/closes', async () => {
    const wrapper = factory()
    wrapper.vm.openCart()
    await wrapper.vm.$nextTick()
    expect(document.documentElement.classList.contains('cart-drawer-open')).toBe(true)
    wrapper.vm.closeCart()
    await wrapper.vm.$nextTick()
    expect(document.documentElement.classList.contains('cart-drawer-open')).toBe(false)
  })
})