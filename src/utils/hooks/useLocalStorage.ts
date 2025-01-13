type LocalStorageType = "set" | "get";

export const useLocalStorage = <T>(
  key: string,
  type: LocalStorageType,
  valueToStore?: T
): T | null => {
  if (typeof window === "undefined") {
    return null;
  }

  if (type === "set") {
    if (valueToStore !== undefined) {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }
  } else if (type === "get") {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      return storedValue as T;
    }
  }
  return null;
};
