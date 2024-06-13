import { defineAsyncComponent, type Component } from "vue";
import type { IAsyncComponent } from "./interfaces/IAsyncComponent";
// import UserDefaultError from "@ui/defaults/exceptions/default-error/DefaultError.vue";
// import UserDefaultLoader from "@ui/defaults/loaders/default-loader/DefaultLoader.vue";

export default function useAsyncComponent(): IAsyncComponent {
  const create = async ({
    component,
    // error = UserDefaultError,
    // loader = UserDefaultLoader
  } :{ component: string, error?: Component, loader?: Component}): Promise<Component> => {
    return await defineAsyncComponent({
      // errorComponent: error,
      // loadingComponent: loader,
      loader: () => import (/* @vite-ignore */ `../../${ component }.vue`)
    })
  }

  

  return { create }
}