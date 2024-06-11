import React from "react";

const Team = () => {
  return (
    <>
      <div className="w-full z-10 bg-[#f4f7ff]  pt-[70px]">
        <div className="w-[1150px] pb-[100px] relative m-auto flex items-center justify-between">
          <div>
            <p className="text-[64px] font-semibold mb-[30px] text-[#1b5bf7]">
              Team
            </p>
            <p className="text-[20px] mb-[0px] font-semibold text-[#464359]">
              For each project, we form a team that includes a <br /> project
              manager, business analyst, UI / UX designer, <br /> DevOps, QA
              engineer, backend and front-end <br /> developers.
            </p>
            <p className="text-[120px] font-semibold text-[#1b5bf7]">100+</p>
            <p className="text-[#464359] absolute bottom-[60px] font-semibold text-[40px]">
              Dedicated team
            </p>
          </div>
          <div>
            <img
              src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
