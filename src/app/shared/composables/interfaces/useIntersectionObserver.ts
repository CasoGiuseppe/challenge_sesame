export interface ICreateObserver {
    element: HTMLElement | Element
    options?: Record<string, any>
}

export interface IIntersectionObserver {
    createObserver: ({ element, options }: ICreateObserver) => void
}