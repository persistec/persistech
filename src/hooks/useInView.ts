"use client";

import { RefObject, useEffect, useState } from "react";

export default function useInView(
  ref: RefObject<Element | null>,
  threshold = 0.1,
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsInView(true);
        observer.disconnect();
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isInView, ref, threshold]);

  return isInView;
}
