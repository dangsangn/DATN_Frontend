import { useEffect, useState } from "react";

export const useCheckscrollDown = () => {
  const [isDown, setIsDown] = useState({
    height: window.pageYOffset,
    status: false,
  });

  useEffect(() => {
    const handleChangeHeight = () => {
      setIsDown((pre) => {
        if (window.pageYOffset > pre.height) {
          setIsDown({ status: true, height: window.pageYOffset });
        } else {
          setIsDown({ status: false, height: window.pageYOffset });
        }
      });
    };
    window.addEventListener("scroll", handleChangeHeight);
    return () => {
      window.removeEventListener("scroll", handleChangeHeight);
    };
  }, []);

  return isDown;
};
