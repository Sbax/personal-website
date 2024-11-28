export const useDebounce = <T extends unknown[]>(
  func: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  const timerRef = { current: null as ReturnType<typeof setTimeout> | null };

  return (...args: T) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      func(...args);
      timerRef.current = null;
    }, delay);
  };
};
