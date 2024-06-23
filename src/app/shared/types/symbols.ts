import type { InjectionKey } from 'vue';
import type { ITranslation } from '@/app/shared/composables/interfaces/ITranslation';
import type { IAsyncComponent } from '@app/shared/composables/interfaces/IAsyncComponent';
import type { IRouterUtilities } from '@app/shared/composables/interfaces/IRouterUtilities';

export const keyUseTranslation = Symbol() as InjectionKey<ITranslation>;
export const keyUseAsyncComponent= Symbol() as InjectionKey<IAsyncComponent>
export const keyUseRouterUtilities = Symbol() as InjectionKey<IRouterUtilities>
