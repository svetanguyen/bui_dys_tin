import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Footer = () => {
  const { ref: inViewRef, inView } = useInView();
  const [animationClass, setAnimationClass] = useState(
    "opacity-0 translate-y-20"
  );
  const email = "buidystin@gmail.com";

  useEffect(() => {
    if (inView) {
      setAnimationClass("translate-y-0 opacity-1");
    }
  }, [inView]);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(email)
      .then(() => {
        console.log(email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDownloadButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="py-6 lg:py-[72px] font-mono">
      <div
        ref={inViewRef}
        className={`lg:flex items-center justify-between transition-all duration-1000 bg-black-100 py-8 px-6 lg:pl-[104px] lg:pr-[72px]`}
      >
        <div className="flex-grow">
          <p
            className={`text-beige flex items-center text-lg lg:text-2xl flex-wrap transition-all duration-1000 mb-6 lg:mb-10 ${animationClass}`}
          >
            Contact:
            <a
              className="text-beige/60 inline-block mx-2"
              href="mailto:buidystin@gmail.com"
            >
              <input className="hidden" type="text" value={email} readOnly />
              {email}
            </a>
            <button onClick={handleCopyClick}>
              <svg
                className="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.19567 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.97933 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.97933 2.19567 8.45 2 9 2H18C18.55 2 19.021 2.19567 19.413 2.587C19.8043 2.979 20 3.45 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.021 17.8043 18.55 18 18 18H9ZM9 16H18V4H9V16ZM9 16V4V16Z"
                  fill="#FFD187"
                />
              </svg>
            </button>
          </p>
          <button
            onClick={onDownloadButtonClick}
            className={`flex items-center transition-all duration-1000 delay-300 ${animationClass}`}
          >
            <svg
              className="h-full mr-2"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 37.1668H9.99996C9.11591 37.1668 8.26806 36.8156 7.64294 36.1905C7.01782 35.5654 6.66663 34.7176 6.66663 33.8335V7.16683C6.66663 6.28278 7.01782 5.43493 7.64294 4.80981C8.26806 4.18469 9.11591 3.8335 9.99996 3.8335H21.6666C21.6816 3.83154 21.6967 3.83154 21.7116 3.8335H21.7216C21.7374 3.83842 21.7536 3.84177 21.77 3.8435C21.9166 3.8535 22.0616 3.88183 22.2016 3.9285H22.2716C22.3024 3.95003 22.3314 3.974 22.3583 4.00016C22.5399 4.0809 22.7053 4.19383 22.8466 4.3335L32.8466 14.3335C32.9863 14.4748 33.0993 14.6403 33.18 14.8218C33.1945 14.8579 33.2073 14.8946 33.2183 14.9318L33.235 14.9785C33.2816 15.1168 33.3083 15.2618 33.3166 15.4085C33.3181 15.4251 33.322 15.4414 33.3283 15.4568V15.4668C33.331 15.4778 33.3326 15.4889 33.3333 15.5002V33.8335C33.3333 34.7176 32.9821 35.5654 32.357 36.1905C31.7319 36.8156 30.884 37.1668 30 37.1668ZM24.04 23.8335V32.1668H25.6066V28.7668H28.04V27.3702H25.6066V25.2352H28.3333V23.8335H24.04ZM17.8733 23.8335V32.1668H19.8833C20.2996 32.1874 20.7152 32.1142 21.0995 31.9527C21.4837 31.7911 21.8268 31.5454 22.1033 31.2335C22.6781 30.5 22.9661 29.5822 22.9133 28.6518V27.3018C22.9521 26.3812 22.656 25.4777 22.08 24.7585C21.5383 24.1418 20.7466 23.8018 19.925 23.8335H17.8733ZM11.6666 23.8335V32.1668H13.2333V29.2352H14.2766C14.9733 29.2735 15.6533 29.0152 16.15 28.5252C16.6231 27.9957 16.8686 27.3011 16.8333 26.5918C16.8642 25.8655 16.6189 25.1545 16.1466 24.6018C15.9159 24.346 15.6314 24.1444 15.3136 24.0116C14.9958 23.8787 14.6524 23.8179 14.3083 23.8335H11.6666ZM21.6666 7.16683V15.5002H30L21.6666 7.16683ZM19.91 30.7702H19.44V25.2352H20.01C20.2092 25.2234 20.4081 25.2618 20.5886 25.3468C20.7692 25.4319 20.9255 25.5608 21.0433 25.7218C21.2883 26.2268 21.3933 26.7885 21.3466 27.3485V28.7968C21.3833 29.3302 21.2683 29.8635 21.0133 30.3318C20.8787 30.4889 20.708 30.6109 20.5158 30.6873C20.3235 30.7636 20.1156 30.7921 19.91 30.7702ZM14.3083 27.8335H13.2316V25.2352H14.3233C14.4574 25.2366 14.5889 25.2721 14.7055 25.3383C14.8221 25.4044 14.92 25.4991 14.99 25.6135C15.17 25.9118 15.2566 26.2552 15.24 26.6035C15.2609 26.9276 15.1748 27.2497 14.995 27.5202C14.9132 27.6227 14.8085 27.7046 14.6891 27.759C14.5698 27.8135 14.4393 27.839 14.3083 27.8335Z"
                fill="#FCF6F2"
              />
            </svg>
            <div className="text-left">
              <p className="text-lg lg:text-2xl underline text-beige underline-offset-4">
                Resume-Bui-Dys-Tin.PDF
              </p>
              <p className="text-beige/60 text-base lg:text-xl">324 kb</p>
            </div>
          </button>
        </div>
        <div
          className={`max-w-[40%] flex-shrink-0 transition-all duration-1000 delay-700 ${animationClass}`}
        >
          <img className="max-w-full object-contain" src="/images/plane.png" alt="paper plane" />
        </div>
      </div>
    </div>
  );
};
