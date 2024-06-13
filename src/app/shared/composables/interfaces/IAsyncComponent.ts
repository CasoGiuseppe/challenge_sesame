import type { Component } from "vue";

export interface IAsyncComponent {
  create({ component, error, loader } :{ component: string, error?: Component, loader?: Component}): Promise<Component>
}