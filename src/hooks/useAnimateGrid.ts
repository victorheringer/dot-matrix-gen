import { useEffect, useState } from "react";

type UseAnimateGridProps = {
  grids: boolean[][][];
  time: number;
};

export default function useAnimateGrid({ grids, time }: UseAnimateGridProps) {
  const [pointer, setPointer] = useState(0);
  const [playing, setPlaying] = useState(true);

  function getPointer(current: number) {
    return grids.length === current + 1 ? 0 : current + 1;
  }

  function play() {
    if (!playing) {
      setPlaying(true);
      setPointer(getPointer(pointer));
    }
  }

  function pause() {
    playing && setPlaying(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      playing && setPointer(getPointer(pointer));
    }, time);

    return () => clearTimeout(timer);
  }, [pointer]);

  return { grid: grids[pointer], play, pause };
}
