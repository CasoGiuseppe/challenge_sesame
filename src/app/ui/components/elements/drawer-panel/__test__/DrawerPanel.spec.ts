import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/index';
import DrawerPanel from '../DrawerPanel.vue';
import { Types, Position } from '../types';
import {
    $providedTitle,
    $providedBody,
    $uiCloseButton
  } from './utilities';
  
let $wrapper: any;
describe('BaseButton component tests', () => {
  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(DrawerPanel, {
        props: {
          id: 'test',
          is: Types.DRAWER,
          position: Position.CENTER,
          open: true,
        }
      })
    })

    it('Should props have a correct typeof', async () => {
      expect(typeof $wrapper.props('id')).toBe('string')
      expect(typeof $wrapper.props('is')).toBe('string')
      expect(typeof $wrapper.props('position')).toBe('string')
      expect(typeof $wrapper.props('open')).toBe('boolean')
    })

    it('Should prop type have a correct content', async () => {
      expect($wrapper.props('is')).toEqual(Types.DRAWER)
    })

    it('Should prop size have a correct content', async () => {
      expect($wrapper.props('position')).toEqual(Position.CENTER)
    })
  })

  describe('Test HTML appearance', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(DrawerPanel, {
        props: {
          open: true
        }
      })
    })
    it('Should have a correct type class', async () => {
      expect($wrapper.classes()).toContain('drawer-panel')
    })

    it('Should drawer be visible', async () => {
      expect($wrapper).not.toBeNull()
    })
  })
})
