import type { Component } from 'vue';
import * as VueTestUtils from '@vue/test-utils';

export const mountComponent = async (
  component: Component,
  props?: Record<string, any>,
  typeMount: 'shallowMount' | 'mount' = 'shallowMount'
) => {
  return await VueTestUtils[typeMount](component, {
    ...props,
    global:  {
      ...props?.global,
      directives: {
        ...props?.global?.directives
      }
    }
  });
};