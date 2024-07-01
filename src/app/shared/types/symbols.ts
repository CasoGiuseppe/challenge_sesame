import type { InjectionKey } from 'vue';
import type { ITranslation } from '@/app/shared/composables/interfaces/ITranslation';
import type { IAsyncComponent } from '@app/shared/composables/interfaces/IAsyncComponent';
import type { IRouterUtilities } from '@app/shared/composables/interfaces/IRouterUtilities';
import type { IIntersectionObserver } from '@app/shared/composables/interfaces/IIntersectionObserver';
import type { IResourcesUtilities } from '@app/shared/composables/interfaces/IResourcesUtilities';

export const keyUseTranslations = Symbol() as InjectionKey<ITranslation>;
export const keyUseAsyncComponent= Symbol() as InjectionKey<IAsyncComponent>
export const keyUseRouterUtilities = Symbol() as InjectionKey<IRouterUtilities>
export const keyUseIntersectionObserver = Symbol() as InjectionKey<IIntersectionObserver>
export const keyUseResourcesUtilities = Symbol() as InjectionKey<IResourcesUtilities>
