import { useEffect } from 'react';

type UseEventListener = (eventName: string, handler: (event: Event) => void, element?: HTMLElement | Window) => void;

const useEventListener: UseEventListener = (eventName: string, handler, element = window) => {
  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }
    const eventListener = (event: Event) => handler(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
};

export { useEventListener };
