import { useCallback, useEffect, useState } from "react";

const ratios = new Map<number, number>();
const listeners = new Set<() => void>();
let leader: number | null = null;

function recompute() {
  let next: number | null = null;
  let best = 0;

  ratios.forEach((ratio, id) => {
    if (ratio > best) {
      best = ratio;
      next = id;
    }
  });

  if (next === leader) return;
  leader = next;
  listeners.forEach((listener) => listener());
}

/** Only the project card nearest the middle of the screen may autoplay. */
export function useSlideshowTurn(id: number) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => setActive(leader === id);
    listeners.add(sync);
    sync();
    return () => {
      listeners.delete(sync);
      ratios.delete(id);
      recompute();
    };
  }, [id]);

  const setVisibleRatio = useCallback(
    (ratio: number) => {
      if (ratio > 0.35) ratios.set(id, ratio);
      else ratios.delete(id);
      recompute();
    },
    [id]
  );

  return { active, setVisibleRatio };
}
