import { useSyncExternalStore, useCallback } from "react";
import { CartItem } from "./data";

const STORAGE_KEY = "missfiah-cart";
const UPDATE_EVENT = "missfiah-cart-update";

function getServerSnapshot() {
  return "[]";
}

function getSnapshot() {
  if (typeof window === "undefined") return "[]";
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => callback();
  window.addEventListener(UPDATE_EVENT, handler);
  return () => window.removeEventListener(UPDATE_EVENT, handler);
}

function dispatchUpdate() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(UPDATE_EVENT));
}

export function useCartStore() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const items: CartItem[] = raw ? (JSON.parse(raw) as CartItem[]) : [];

  const setItems = useCallback((nextItems: CartItem[]) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
      dispatchUpdate();
    } catch {
      // ignore storage errors
    }
  }, []);

  return { items, setItems };
}
