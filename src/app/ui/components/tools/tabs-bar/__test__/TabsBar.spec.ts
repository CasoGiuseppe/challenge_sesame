import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/index';
import TabsBar from '../TabsBar.vue';
import { nextTick } from 'vue';

import {
  $uiTabsListLabel,
  $providedEmptyMessage,
  $providedEmptyClass,
  $providedTabsList
} from './utilities';

let $wrapper: any;

describe('BaseButton component tests', () => {
  describe('Test HTML appearance', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(
        TabsBar,
        {
          props: {
            id: 'tabsList',
            tabs: $providedTabsList
          }
        },
        'mount'
      );
    });

    it('Should have correct css class when is empty', async () => {
      await $wrapper.setProps({ tabs: [] });
      await nextTick();
      expect($wrapper.classes()).toContain($providedEmptyClass);
    });

    it('Should have correct text when is empty', async () => {
      await $wrapper.setProps({ tabs: [] });
      await nextTick();
      expect($wrapper.text()).toContain($providedEmptyMessage);
    });

    it('Should have correct items lenght when has tabs elements', async () => {
      expect($wrapper.find(`${$uiTabsListLabel}`).findAll('li')).toHaveLength(3);
    });
  });

  describe('Test props behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(TabsBar, {
        props: {
          id: 'tabsList',
          tabs: $providedTabsList
        }
      });
    });

    it('Should props have a correct typeof', async () => {
      expect(typeof $wrapper.props('id')).toBe('string');
      expect(typeof $wrapper.props('tabs')).toBe('object');
    });

    it('Should prop tabs have a correct lenght', async () => {
        expect($wrapper.props('tabs')).toHaveLength(3)
    })
  });
});
