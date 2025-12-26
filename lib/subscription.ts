export const STORAGE_KEYS = {
  MODAL_SHOWN: "subscription-modal-shown",
  USER_SUBSCRIBED: "user-subscribed",
  USER_EMAIL: "user-email",
  LAST_SHOWN: "subscription-modal-last-shown",
} as const;

export function hasUserSubscribed(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEYS.USER_SUBSCRIBED) === "true";
}

export function hasModalBeenShown(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEYS.MODAL_SHOWN) === "true";
}

export function getUserEmail(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEYS.USER_EMAIL);
}

export function markModalAsShown(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.MODAL_SHOWN, "true");
  localStorage.setItem(STORAGE_KEYS.LAST_SHOWN, new Date().toISOString());
}

export function markUserAsSubscribed(email: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.USER_SUBSCRIBED, "true");
  localStorage.setItem(STORAGE_KEYS.USER_EMAIL, email);
}

export function resetSubscriptionState(): void {
  if (typeof window === "undefined") return;
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
}

export function shouldShowModal(): boolean {
  if (typeof window === "undefined") return false;
  
  const hasSubscribed = hasUserSubscribed();
  const hasBeenShown = hasModalBeenShown();
  
  return !hasSubscribed && !hasBeenShown;
}
