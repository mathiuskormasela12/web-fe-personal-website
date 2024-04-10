'use client'
import React, { useCallback } from "react";
import { useHasMounted } from "@/hooks";
import { useAtom } from "jotai";
import { counterAtom } from "@/store";

const HomePage: React.FC = () => {
  const hasMounted = useHasMounted();
  const [count, setCount] = useAtom(counterAtom)

  const handleCounter = useCallback(() => {
    setCount(currentCount => currentCount + 1);
  }, [setCount])

  if(!hasMounted) return null;

  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={handleCounter}>
        Counter {count}
      </button>
    </div>
  )
}

export default HomePage;