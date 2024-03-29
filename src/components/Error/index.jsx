import React, { useEffect, useRef } from 'react'
import lottie from "lottie-web";
import errorAnimation from "../../documents/error-occurred.json";

const Loading = () => {

  const error = useRef();
  const anim = useRef();

  useEffect(() => {
    if (lottie && error) {
      anim.current = lottie.loadAnimation({
        container: error.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: errorAnimation
      });
    }
  }, [error]);


  return (
    <div class="w-full flex flex-col justify-center items-center my-8">
      <div className="h-[150px] w-full" ref={error} />
      <div className="text-xl text-center">
        Unfortunately an error occured! We're working on it
      </div>
    </div>
  )
}

export default Loading