import {useEffect, useState} from 'react'
import { useInView } from "react-intersection-observer";

export const TextBanner = () => {
  const {ref: inViewRef, inView} = useInView();
  const [animationClass, setAnimationClass] = useState('-translate-x-[110%]')

  useEffect(() => {
      if (inView) {
        setAnimationClass('translate-x-0')
      }
  }, [inView])

  return (
    <div ref={inViewRef} className={`uppercase tracking-tighter transition-all min-h-screen flex flex-col justify-center`}>
      <div className={`leading-tight font-serif duration-1000 transition-all text-2xl lg:text-3.5xl mb-10 font-bold ${animationClass}`}>
        <p>Bui Dys Tin.</p>
        <p>UI/UX Designer.</p>
      </div>
      <div className={`font-light delay-500 duration-1000 transition-all text-5xl lg:text-7.5xl ${animationClass}`}>
        <span className="lg:block">Crafting digital </span>
        <span className="lg:block">experiences that </span>
        <span className="lg:block">help people</span>
      </div>
    </div>
  );
};
