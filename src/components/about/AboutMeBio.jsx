import { useContext, } from "react";
import profileImage from "../../images/profile.jpeg";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <>
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 ">
        <div className="w-full h-60 sm:w-2/3 mb-7 sm:mb-0">
          <img
            src={profileImage}
            className="rounded-lg w-2/3 "
            alt="Dev Patel"
          />
        </div>

        <div className="font-general-regular w-full sm:w-3/4 text-left items-center">
          {aboutMe.map((bio, id, intro) => (
            <>
              <p
                className="mb-4 text-ternary-dark dark:text-ternary-light font-black text-3xl font-bold"
                key={intro}
              >
                {bio.intro}
              </p>
              <p
                className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                key={id}
              >
                {bio.bio}
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMeBio;
