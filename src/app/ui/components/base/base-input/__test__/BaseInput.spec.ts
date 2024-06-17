import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/index';
import BaseInput from '../BaseInput.vue';
import { Types } from '../types';
import {
    $uiDOMInputTrigger,
    $initProvidedEmittedValue,
    $newProvidedEmittedValue,
    $userAllowedPattern
} from './utilities';

let $wrapper: any;
describe('BaseInput component tests', () => {
    describe('Test v-model behaviours', () => {
        beforeEach(async () => {
            $wrapper = await mountComponent(BaseInput, {
              props: {
                proxyValue: $initProvidedEmittedValue,
                'onUpdate:proxyValue': (e: any) => $wrapper.setProps({ proxyValue: e })
              }
            });
        });

        it('Should model value have correct text on input change', async () => {
            await $wrapper.find(`${$uiDOMInputTrigger}`).setValue($newProvidedEmittedValue);
            expect($wrapper.props('proxyValue')).toBe($newProvidedEmittedValue);
        });
    });

    describe('Test emits behaviours', () => {
        beforeEach(async () => {
            $wrapper = await mountComponent(BaseInput, {
                props: {
                    pattern: $userAllowedPattern,
                },
            });
        });

        it('Should emit "update:proxyValue" could have a correct property on input change', async () => {
            $wrapper.find(`${$uiDOMInputTrigger}`).setValue($newProvidedEmittedValue);
            expect($wrapper.emitted()).toHaveProperty('update:proxyValue');
        });

        it('Should emit "update:proxyValue" was detected ad have correct value', async () => {
            $wrapper.find(`${$uiDOMInputTrigger}`).setValue($newProvidedEmittedValue);
            expect($wrapper.emitted('update:proxyValue')).toHaveLength(1);
            expect($wrapper.emitted('update:proxyValue')[0][0]).toEqual($newProvidedEmittedValue);
        });
    });

    describe('Test props behaviours', () => {
        beforeEach(async () => {
            $wrapper = await mountComponent(BaseInput, {
              props: {
                id: 'field',
                type: Types.TEXT,
                proxyValue: $initProvidedEmittedValue,
              }
            });
        });

        it('Should props have a correct typeof', async () => {
            expect(typeof $wrapper.props('id')).toBe('string');
            expect(typeof $wrapper.props('type')).toBe('string');
            expect(typeof $wrapper.props('proxyValue')).toBe('string');
        });

        it('Should prop input have a correct content', async () => {
            expect($wrapper.props('type')).toEqual(Types.TEXT);
        });
    });
});