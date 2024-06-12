import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/utilities';
import BaseButton from '../BaseButton.vue';
import { Types, Sizes } from '../types';
import {
  $providedButtonLabel,
  $uiSubmitTrigger
} from './utilities';

let $wrapper: any
describe('BaseButton component tests', () => {
  describe('Test HTML attribute', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseButton, {
        props: {
          disabled: true
        }
      })
    })

    it('Should button have correct disabled state', () => {
      const DOMElement = $wrapper.html()
      expect(DOMElement).toContain('disabled')
    })
  })

  describe('Test slost behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseButton, {
        slots: {
          default: $providedButtonLabel
        }
      })
    })

    it('Should default slot have a correct label content', () => {
      expect($wrapper.html()).toContain($providedButtonLabel)
    })
  })

  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseButton, {
        props: {
          id: 'test',
          type: Types.PRIMARY,
          variant: true,
          size: Sizes.L,
          disabled: false,
          label: 'Aria label'
        }
      })
    })

    it('Should props have a correct typeof', async () => {
      expect(typeof $wrapper.props('id')).toBe('string')
      expect(typeof $wrapper.props('type')).toBe('string')
      expect(typeof $wrapper.props('variant')).toBe('boolean')
      expect(typeof $wrapper.props('size')).toBe('string')
      expect(typeof $wrapper.props('disabled')).toBe('boolean')
      expect(typeof $wrapper.props('label')).toBe('string')
    })

    it('Should prop type have a correct content', async () => {
      expect($wrapper.props('type')).toEqual(Types.PRIMARY)
    })

    it('Should prop size have a correct content', async () => {
      expect($wrapper.props('size')).toEqual(Sizes.L)
    })
  })

  describe('Test emits behaviours', () => {
    it('Should emit "send" could have a correct property on reset click', async () => {
      $wrapper.find(`${$uiSubmitTrigger}`).trigger('click')
      expect($wrapper.emitted()).toHaveProperty('send')
    })
  })

  describe('Test HTML appearance', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseButton, {
        props: {
          type: Types.SECONDARY,
          variant: true,
          size: Sizes.M
        }
      })
    })
    it('Should have a correct type class', async () => {
      const $child = $wrapper.find('.base-button__element')
      expect($child.classes()).toContain('base-button--is-secondary')
    })

    it('Should have a correct variant class', async () => {
      const $child = $wrapper.find('.base-button__element')
      expect($child.classes()).toContain('base-button--is-secondary-ALT')
    })

    it('Should have a correct size class', async () => {
      const $child = $wrapper.find('.base-button__element')
      expect($child.classes()).toContain('base-button--is-M')
    })
  })
})
