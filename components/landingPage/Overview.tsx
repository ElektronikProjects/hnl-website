import React from 'react';

function Overview() {
  return (
    <>
      <div className="flex justify-center items-center gap-8 w-full px-8">
        <div className="w-1/2 p-16 flex flex-col items-center justify-center gap-8">
          <div className="font-semibold text-6xl ">Best emotions with us!</div>
          <div className="text-xl text-foreground/50 leading-relaxed">
            Hockey season is in full swing! Don’t miss thrilling matchups,
            intense rivalries, and rising stars lighting up the ice. Grab your
            jersey and cheer your team to victory, game time is here!
          </div>
        </div>
        <div className="w-1/2 p-16">
          <div className="aspect-video w-full bg-slate-500 rounded-xl overflow-hidden">
            {/* todo image */}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 w-full px-8">
        <div className="w-1/2 p-16">
          <div className="aspect-video w-full bg-slate-500 rounded-xl overflow-hidden">
            {/* todo image */}
          </div>
        </div>
        <div className="w-1/2 p-16 flex flex-col items-center justify-center gap-8">
          <div className="font-semibold text-6xl ">
            Check out upcoming games
          </div>
          <div className="text-xl text-foreground/50 leading-relaxed">
            Hockey season is in full swing! Don’t miss thrilling matchups,
            intense rivalries, and rising stars lighting up the ice. Grab your
            jersey and cheer your team to victory, game time is here!
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
