/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden font-sans">
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* 3-Column Layout for Text and Center Space */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center justify-center w-full gap-8 md:gap-0">
          
          {/* Left Text */}
          <div className="flex justify-center md:justify-end md:pr-6 lg:pr-12">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-medium tracking-tight whitespace-nowrap">
              Out of time
            </h1>
          </div>

          {/* Center Space */}
          {/* Maintained empty as per instructions to 'keep space in the centre' */}
          <div className="w-64 h-64 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] relative mx-auto flex shrink-0">
          </div>

          {/* Right Text */}
          <div className="flex justify-center md:justify-start md:pl-6 lg:pl-12">
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-medium tracking-tight whitespace-nowrap">
              and space
            </h1>
          </div>

        </div>
      </div>

      {/* Bottom Text Area */}
      <div className="absolute bottom-10 md:bottom-16 w-full flex justify-center px-4">
        <p className="text-[#cccccc] text-center text-sm md:text-base lg:text-[17px] font-normal leading-relaxed tracking-wide">
          Coinflect has migrated to <br />
          wrapped Coinflect. Read more <br />
          in our new article
        </p>
      </div>

    </div>
  );
}
