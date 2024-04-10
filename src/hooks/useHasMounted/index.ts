'use client'
import { useEffect, useState } from "react"
import { HasMountedHook } from "./types";

const useHasMounted: HasMountedHook = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, [])

  return hasMounted;
}

export default useHasMounted;