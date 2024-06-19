import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/index';
import BaseItemMenu from '../BaseItemMenu.vue';
import { Is } from '@app/ui/components/abstracts/component-is/types';

let $wrapper: any
describe('BaseItemMenu component tests', () => {
  describe('Test HTML attribute', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseItemMenu, {
        props: {
          disabled: true,
          is: Is.BUTTON
        }
      })
    })

    it('Should menu item have correct disabled state', () => {
      const DOMElement = $wrapper.html()
      expect(DOMElement).toContain('disabled')
      expect($wrapper.props()['disabled']).toBe(true)
    })

    it('Should menu item have correct selected state', () => {
        const DOMElement = $wrapper.html()
        expect(DOMElement).toContain('selected')
        expect($wrapper.props()['selected']).toBe(false)
    })
  })

  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseItemMenu, {
        props: {
          id: 'test',
          is: Is.ROUTERLINK,
          disabled: false,
          selected: false,
        }
      })
    })

    it('Should props have a correct typeof', async () => {
      expect(typeof $wrapper.props('id')).toBe('string')
      expect(typeof $wrapper.props('is')).toBe('string')
      expect(typeof $wrapper.props('disabled')).toBe('boolean')
      expect(typeof $wrapper.props('selected')).toBe('boolean')
    })

    it('Should prop is have a correct content', async () => {
      expect($wrapper.props('is')).toEqual(Is.ROUTERLINK)
    })
  })

  describe('Test emits behaviours', () => {
    beforeEach(async () => {
        $wrapper = await mountComponent(BaseItemMenu, {
          props: {
            is: Is.BUTTON,
          }
        })
      })

    it('Should emit "send" could have a correct property on reset click', async () => {
      $wrapper.trigger('click')
      console.log()
      expect($wrapper.emitted()).toHaveProperty('send')
    })
  })
})
