import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://github.com/Viraj324/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://www.instagram.com/mr_viraj324/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">mr_viraj324</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://www.linkedin.com/in/viraj-sonawane-5518851a7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">viraj-sonawane-5518851a7</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Viraj Sonawane</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">+91-7972023035</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">virajssonawane324@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Viraj Sonawane. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
