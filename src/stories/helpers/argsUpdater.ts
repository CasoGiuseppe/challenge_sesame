// argsUpdater.ts
import { useArgs } from '@storybook/preview-api'
import type { DecoratorFunction, Renderer, StoryContext } from '@storybook/types'

type Fn = (...args: any) => any

/**
 * @example
 * {
 *   decorators: [argsUpdater('btnClicked', () => ({ clicked: true }))]
 * }
 * @see https://github.com/storybookjs/storybook/issues/17089
 */
export function argsUpdater<
  TRenderer extends Renderer,
  TArgs,
  TArgName extends keyof {
    [K in keyof TArgs as Fn extends TArgs[K] ? K : never]: TArgs[K]
  },
>(
  argName: TArgName,
  updater: (
    this: StoryContext<TRenderer, TArgs>,
    ...args: TArgs[TArgName] extends Fn ? Parameters<TArgs[TArgName]> : []
  ) => TArgs,
): DecoratorFunction<TRenderer, TArgs> {
  return (storyFn, ctx) => {
    const bindedUpdater = updater.bind(ctx)
    const [, updateArgs] = useArgs()
    const prevValue = ctx.args[argName]
    ctx.args[argName] = ((...fnArgs: any) => {
      updateArgs(bindedUpdater(...fnArgs) as any)
      if (typeof prevValue === 'function') {
        return prevValue(...fnArgs)
      }
    }) as TArgs[TArgName]
    return storyFn()
  }
}