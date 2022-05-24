import { useEffect, useState } from "react";

export enum BREAKPOINTS {
  SM = "(min-width: 0px)",
  MD = "(min-width: 768px)",
  LG = "(min-width: 992px)",
  XL = "(min-width: 1200px)",
}

const useMediaQuery = (query: BREAKPOINTS) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }

    const listener = () => setMatches(!!mediaQuery.matches);
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
