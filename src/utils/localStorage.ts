export function getItem(key: string): string | null {
  const storageValue = localStorage.getItem(key);

  if (!storageValue) {
    return null;
  }

  return storageValue;
}

export function setItem(key: string, value?: string) {
  if (value) {
    window.localStorage.setItem(key, value);
  } else {
    window.localStorage.removeItem(key);
  }
}

export function removeItem(key: string) {
  return window.localStorage.removeItem(key);
}
