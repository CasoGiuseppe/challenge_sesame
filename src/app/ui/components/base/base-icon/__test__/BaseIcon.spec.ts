import { describe, it, expect, beforeEach, vi } from 'vitest';
import { flushPromises } from '@vue/test-utils';
import { mountComponent } from '@tests/index';
import BaseIcon from '@app/ui/components/base/base-icon/BaseIcon.vue'
import { Sizes } from '../types'
import { $uiDOMIDValue, } from './utilities';


let $wrapper: any;
describe('BaseIcon component tests', () => {
    describe('Test props behaviours', () => {
        beforeEach(async () => {
            $wrapper = await mountComponent(BaseIcon, {
              props: {
                id: $uiDOMIDValue,
                size: Sizes.L,
                name: 'IconSearch',
              }
            });
            await flushPromises;
            await vi.dynamicImportSettled();
        });

        it('Should component load correctly', () => {
            expect(BaseIcon).toBeTruthy()
        });

        it('Should prop id have a correct conent', async () => {
            expect($wrapper.props('id')).toBe($uiDOMIDValue);
        });

        it('Should prop size have a correct content', async () => {
            expect($wrapper.props('size')).toBe(Sizes.L);            
        });
    })
})