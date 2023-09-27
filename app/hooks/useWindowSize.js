'use client';

// hooks
import { useSyncExternalStore } from 'react';

export function useWindowSize() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  console.log('getSnapshot');
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function getServerSnapshot() {
  return true;
}
