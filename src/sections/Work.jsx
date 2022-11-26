import {useState, useEffect} from 'react'
import { useInView } from "react-intersection-observer";

export const Work = ({
  title,
  img,
  type,
  design,
  presentation,
  description,
}) => {
    const {ref: inViewRef, inView} = useInView();
    const [animationClass, setAnimationClass] = useState('opacity-0 translate-y-20')
    useEffect(() => {
        if (inView) {
            setAnimationClass('opacity-100 translate-y-0')
        }
    }, [inView])
  return (
    <div ref={inViewRef} className={`md:flex py-7 md:py-[65px] items-center transition-all duration-1000 ${animationClass}`}>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          className="max-w-full object-cover"
          src={`images/${img}`}
          alt={title}
        />
      </div>
      <div className="md:px-14 md:w-1/2">
        <h3 className="font-light uppercase text-4.5xl">{title}</h3>
        <h4 className="font-mono mb-4 md:mb-6 text-black-100/60">{type}</h4>
        <p className="font-mono mb-4 md:mb-6">{description}</p>
        <div className="flex gap-2 md:gap-6">
          {presentation && (
            <a
              className="border-black-100 text-base md:text-xl border rounded-[50px] flex py-4 justify-center items-center font-mono w-1/2 md:w-[212px]"
              href={presentation}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6698 6.14301H21.6585V7.44486H15.6698V6.14301ZM9.66904 11.2939C10.9929 10.7264 11.6863 9.86297 11.6863 8.52884C11.6863 5.89017 9.49493 5.25 6.96435 5.25H0V18.4945H7.15947C9.84315 18.4945 12.3617 17.3379 12.3617 14.6481C12.3617 12.9858 11.4852 11.7566 9.66904 11.2939ZM3.24803 7.50941H6.29493C7.46867 7.50941 8.52233 7.8026 8.52233 9.02376C8.52233 10.1481 7.70281 10.6 6.54109 10.6H3.24803V7.50941ZM6.7152 16.2458H3.24503V12.5985H6.78424C8.21313 12.5985 9.1167 13.1337 9.1167 14.4894C9.1167 15.8235 8.03902 16.2458 6.7152 16.2458ZM24 13.8385C24 11.0007 22.1478 8.63643 18.7977 8.63643C15.5407 8.63643 13.3253 10.834 13.3253 13.7147C13.3253 16.7004 15.4236 18.75 18.7977 18.75C21.3523 18.75 23.0064 17.7198 23.8019 15.5223H21.2113C20.9291 16.3426 19.7824 16.773 18.8908 16.773C17.1677 16.773 16.2672 15.8692 16.2672 14.3334H23.979C23.988 14.1747 24 14.0079 24 13.8385ZM16.2672 12.6711C16.3602 11.4096 17.2998 10.6215 18.7047 10.6215C20.1816 10.6215 20.9201 11.3988 21.0492 12.6711H16.2672Z"
                  fill="#4870FF"
                />
              </svg>
              Presentation
            </a>
          )}
          {design && (
            <a
              className="border-black-100 text-base md:text-xl border rounded-[50px] flex py-4 justify-center items-center font-mono w-1/2 md:w-[212px]"
              href={design}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="mr-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14819 24C10.3562 24 12.1482 22.208 12.1482 20V16H8.14819C5.94019 16 4.14819 17.792 4.14819 20C4.14819 22.208 5.94019 24 8.14819 24Z"
                  fill="#0ACF83"
                />
                <path
                  d="M4.14819 12C4.14819 9.792 5.94019 8 8.14819 8H12.1482V16H8.14819C5.94019 16 4.14819 14.208 4.14819 12Z"
                  fill="#A259FF"
                />
                <path
                  d="M4.14819 4C4.14819 1.792 5.94019 0 8.14819 0H12.1482V8H8.14819C5.94019 8 4.14819 6.208 4.14819 4Z"
                  fill="#F24E1E"
                />
                <path
                  d="M12.1482 0H16.1482C18.3562 0 20.1482 1.792 20.1482 4C20.1482 6.208 18.3562 8 16.1482 8H12.1482V0Z"
                  fill="#FF7262"
                />
                <path
                  d="M20.1482 12C20.1482 14.208 18.3562 16 16.1482 16C13.9402 16 12.1482 14.208 12.1482 12C12.1482 9.792 13.9402 8 16.1482 8C18.3562 8 20.1482 9.792 20.1482 12Z"
                  fill="#1ABCFE"
                />
              </svg>
              Design file
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
