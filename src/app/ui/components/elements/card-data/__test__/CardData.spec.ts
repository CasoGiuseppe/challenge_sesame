import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/index';
import CardData from '../CardData.vue';

import {
    $providedTitle,
    $providedContent,
    $providedFooter,
    $uiCardActionTrigger,
    $providedID
} from './utilities';

let $wrapper: any;

describe('CardData component tests', () => {
  describe('Test slost behaviours', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(CardData, {
        slots: {
          title: $providedTitle,
          content: $providedContent,
          footer: $providedFooter
        }
      });
    });

    it('Should slots have a correct contents', () => {
      expect($wrapper.html()).toContain($providedTitle);
      expect($wrapper.html()).toContain($providedContent);
      expect($wrapper.html()).toContain($providedFooter);
    });
  });

  describe('Test HTML attribute', () => {
    beforeEach(async () => {
        $wrapper = await mountComponent(CardData, {
          props: {
            contextualMenu: false
          }
        })
    })

    it('Should contextual button is visible', () => {
        expect($wrapper.find(`${$uiCardActionTrigger}`)).not.toBeUndefined()
    })
  });

  describe('Test props behaviours', () => {
    beforeEach(async () => {
        $wrapper = await mountComponent(CardData, {
          props: {
            id: $providedID,
            contextualMenu: false
          }
        });
    });

    it('Should props have a correct typeof', async () => {
        expect(typeof $wrapper.props('id')).toBe('string');
        expect(typeof $wrapper.props('contextualMenu')).toBe('boolean');
    });

    it('Should prop id have a correct value', async () => {
        expect($wrapper.props('id')).toEqual($providedID);
    });
});
});
