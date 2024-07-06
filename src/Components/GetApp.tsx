import React from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import './getapp.css';
import '../app/font.css';

const GetApp = () => {
  return (
    <div className="bg-[#007EAF] text-white relative overflow-hidden p-6">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-between flex-wrap">
        <div className="bg-container flex flex-col lg:flex-row justify-between w-full px-6 md:px-16 py-8 md:py-12">
          <div className="flex flex-col space-y-12 lg:space-y-32 ml-4 md:ml-20 w-full lg:w-1/2">
            <div className="space-y-5 mt-4 lg:space-y-10">
              <h1 className="text-4xl sm:text-5xl md:text-[64px]" style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif', fontSize: '64px', fontWeight: 700, lineHeight: '89.6px' }}>Get the app!</h1>
              <p className="text-lg sm:text-xl" style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif', lineHeight: '32px sm:40px lg:42px', letterSpacing: '1px sm:1.5px lg:2px' }}>
                Lorem ipsum dolor sit amet consectetur. <br /> Dui mauris dictum ultrices rutrum nec arcu <br />vel. Viverra egestas vitae aenean placerat <br />faucibus pharetra.
              </p>
            </div>
            <div className="flex flex-row    lg:space-x-5 space-y-1  sm:space-y-0 gap-2" >
              <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-3 cursor-pointer px-5 h-auto">
                <div className="flex items-center gap-4">
                  <FaApple className="text-1xl sm:text-4xl md:text-5xl" />
                  <div className="text-start">
                    <p className="text-[#231F20B2] text-sm" style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}>Download from</p>
                    <p className="text-lg font-medium">Apple Store</p>
                  </div>
                </div>
              </button> 
              <button className="rounded-2xl bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-3 px-5  h-auto">
                <div className="flex items-center gap-2">
                  <FaGooglePlay className="text-1xl sm:text-4xl md:text-5xl text-[#231F20E5]" />
                  <div className="text-start">
                    <p className="text-[#231F20B2] text-sm" style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}>Download from</p>
                    <p className="text-lg font-medium">Google Store</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 relative flex justify-center lg:justify-end w-full lg:w-1/2">
          <div className="mt-8 lg:mt-0 relative flex justify-center lg:justify-end w-full lg:w-1/2">
          <div className="relative ">
            <Image src="/qr.svg" width={200} height={200} alt="QR code" className="absolute w-[350px] sm:w-[200px] lg:w-[250px] -right-20 md:-right-24 lg:-left-24 bottom-0 lg:bottom-20 transform -translate-x-[25%] -translate-y-[50%]" />
            <Image src="/ph.svg" width={150} height={300} alt="Phone" className="w-[250px] sm:w-[150px] lg:w-[200px]" />
          </div>
          </div>

    
  </div>
</div>

        </div>
      <div className="absolute hidden lg:block top-0 right-0 bg-[url('/topcircle.png')] bg-cover bg-center h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-20 sm:w-40 md:w-60 lg:w-80">
        {/* <Image src="/topcircle.png" alt=""  width={500} height={500}/> */}
      </div>
      </div>
    
  );
};

export default GetApp;
