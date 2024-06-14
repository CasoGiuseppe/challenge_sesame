import { defineAsyncComponent, type Component } from "vue";
import type { IAsyncComponent } from "./interfaces/IAsyncComponent";
import ErrorState from "@app/ui/components/states/default/error-state/ErrorState.vue";
import LoadingState from "@app/ui/components/states/default/loading-state/LoadingState.vue";

export default function useAsyncComponent(): IAsyncComponent {
  /**
     * Method to return an async component loaded
     * @param {string} component - component path/name
     * @param {Component} error - component instance to handle error state
     * @param {Component} loader - component instace to handle loading state
     * @returns {string} - vue component istance
     */

  const create = async ({
    component,
    error = ErrorState,
    loader = LoadingState
  } :{ component: string, error?: Component, loader?: Component}): Promise<Component> => {
    return await defineAsyncComponent({
      errorComponent: error,
      loadingComponent: loader,
      loader: () => import (/* @vite-ignore */ `../../ui/components/${ component }.vue`)
    })
  }

  

  return { create }
}