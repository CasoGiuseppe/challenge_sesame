import type { InjectionKey } from 'vue';
import {
    type IAsyncComponent,
    type ITranslation,
    type IResourcesUtilities,
    type IRouterUtilities
  } from '@app/shared/composables'

export const keyUseTranslations = Symbol() as InjectionKey<ITranslation>;
export const keyUseAsyncComponent= Symbol() as InjectionKey<IAsyncComponent>
export const keyUseRouterUtilities = Symbol() as InjectionKey<IRouterUtilities>
export const keyUseResourcesUtilities = Symbol() as InjectionKey<IResourcesUtilities>
export const keyUseEventError = Symbol() as InjectionKey<String>;
export const keyUseEventSuccess = Symbol() as InjectionKey<String>;
