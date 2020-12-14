import { wrapPageElement as wrap } from './root-wrapper';

(async function() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        await import('scroll-behavior-polyfill');
    }
})();

export const wrapPageElement = wrap;

export const onClientEntry = () => {};
