export default {
    beforeMount(el: any, binding: any): any {
        el.clickOutsideEvent = function(event: Event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el: any): void {
        document.removeEventListener('click', el.clickOutsideEvent);
    },
};