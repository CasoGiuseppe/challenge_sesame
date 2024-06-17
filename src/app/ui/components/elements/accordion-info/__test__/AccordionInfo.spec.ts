import { describe, it, expect, beforeEach } from 'vitest';
import { mountComponent } from '@tests/index';
import AccordionInfo from '../AccordionInfo.vue';

import {
    $providedSummary,
    $providedContent,
    $uiAccordion,
    $uiSummary,
    $uiContent
} from "./utilities"

let $wrapper: any

describe("AccordionInfo component tests", () => {
    describe("Test slots behaviours", () => {
        beforeEach(async () => {
            $wrapper = await mountComponent(AccordionInfo, {
                slots: {
                    summary: $providedSummary,
                    content: $providedContent,
                }
            })
          })

        it("Should render all slots with accurate content", async () => {
            expect($wrapper.html()).toContain($providedSummary)
            expect($wrapper.html()).toContain($providedContent)
        })

        it("Should render summary if summary slot exists", async () => {
            $wrapper = await mountComponent(AccordionInfo)
            expect($wrapper.find($uiSummary).exists()).toBe(false)

            $wrapper = await mountComponent(AccordionInfo, {
                slots: { summary: $providedSummary }
            })
            expect($wrapper.find($uiSummary).exists()).toBe(true)
        })

        it("Should render article if content slot exists", async () => {
            $wrapper = await mountComponent(AccordionInfo)
            expect($wrapper.find($uiContent).exists()).toBe(false)

            $wrapper = await mountComponent(AccordionInfo, {
                slots: { content: $providedContent }
            })
            expect($wrapper.find($uiContent).exists()).toBe(true)
        })
    })

    describe('Test props behaviours', () => {
        beforeEach(async () => {
          $wrapper = await mountComponent(AccordionInfo, {
            props: {
              id: 'test',
              open: true
            }
          })
        })
    
        it('Should props have a correct typeof', async () => {
          expect(typeof $wrapper.props('id')).toBe('string')
          expect(typeof $wrapper.props('open')).toBe('boolean')
        })
    })

    describe('Test HTML attribute', () => {
        beforeEach(async () => {
          $wrapper = await mountComponent(AccordionInfo, {
            props: {
                id: 'test',
                open: true
            }
          })
        })
    
        it("Should render details with attribute according to the open prop", async () => {
            const attrsOpen = $wrapper.find($uiAccordion).attributes()
            expect(Object.keys(attrsOpen).includes("open")).toBe(true)

            $wrapper = await mountComponent(AccordionInfo, {
                props: { open: false }
            })

            const attrsClosed = $wrapper.find($uiAccordion).attributes()
            expect(Object.keys(attrsClosed).includes("open")).toBe(false)
        })
      })
})