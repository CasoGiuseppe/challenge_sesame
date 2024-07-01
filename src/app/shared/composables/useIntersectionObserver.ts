import type {
    IIntersectionObserver,
    ICreateObserver
} from './interfaces/IIntersectionObserver';

const config = {
    root: document.body,
    rootMargin: '0px',
    threshold: 1,
};

export default function useIntersectionObserver({
    action,
}: { action?: (e:any) => any}): IIntersectionObserver {
    const createObserver = ({ element, options }: ICreateObserver): IntersectionObserver => {
        const observer = new IntersectionObserver((entry) => {
            if(action) action(entry[0]);
        }, {...config, ...options});

        observer.observe(element);

        return observer;
    }

    return {
        createObserver
    }
};