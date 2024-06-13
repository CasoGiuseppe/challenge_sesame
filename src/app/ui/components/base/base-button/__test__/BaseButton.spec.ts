import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/index';
import BaseButton from '../BaseButton.vue';
import { Types, Sizes,  } from '../types';
import { Is } from '@app/ui/components/abstracts/component-is/types';

import {
  $providedButtonLabel,
  $uiSubmitTrigger,
  $uiButtonLabel
} from './utilities';

let $wrapper: any
describe('BaseButton component tests', () => {
  describe('Test HTML attribute', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseButton, {
        props: {
          disabled: true,
          is: Is.BUTTON
        }
      })
    })

    it('Should button have correct disabled state', () => {
      const DOMElement = $wrapper.html()
      expect(DOMElement).toContain('disabled')
    })
  })

  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(BaseButton, {
        props: {
          id: 'test',
          type: Types.PRIMARY,
          variant: true,
          size: Sizes.DEFAULT,
          is: Is.BUTTON,
          disabled: false,
          label: 'Aria label'
        }
      })
    })

    it('Should props have a correct typeof', async () => {
      expect(typeof $wrapper.props('id')).toBe('string')
      expect(typeof $wrapper.props('type')).toBe('string')
      expect(typeof $wrapper.props('size')).toBe('string')
      expect(typeof $wrapper.props('disabled')).toBe('boolean')
      expect(typeof $wrapper.props('ariaLabel')).toBe('string')
    })

    it('Should prop type have a correct content', async () => {
      expect($wrapper.props('type')).toEqual(Types.PRIMARY)
    })

    it('Should prop size have a correct content', async () => {
      expect($wrapper.props('size')).toEqual(Sizes.DEFAULT)
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
          size: Sizes.DEFAULT,
          loading: true
        }
      })
    })
    it('Should have a correct type class', async () => {
      expect($wrapper.classes()).toContain('base-button--is-secondary')
    })

    it('Should have a correct size class', async () => {
      expect($wrapper.classes()).toContain('base-button--is-default')
    })

    it('Should have a correct loading class', async () => {
      expect($wrapper.find('.base-button--has-loading').exists()).toBe(true)
      expect($wrapper.classes()).toContain('base-button--is-default')
    })
  })
})
