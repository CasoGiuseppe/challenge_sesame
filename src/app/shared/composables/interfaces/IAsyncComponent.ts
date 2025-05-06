import type { Component, defineComponent } from "vue";

export interface IAsyncComponent {
  create({ component, error, loader } :{ component: string, error?: typeof defineComponent, loader?: typeof defineComponent}): Promise<Component>
}