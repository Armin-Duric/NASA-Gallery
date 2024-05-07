import LinkedInLogo from "/src/assets/svg/LinkedIn.svg";
import xLogo from "/src/assets/svg/X icon.svg";
import dailyDevLogo from "/src/assets/svg/daily dev.svg";
import portfolioIcon from "/src/assets/svg/tags.svg";
import emailIcon from "/src/assets/svg/email.svg";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <>
      <hr />
      <div className="flex md:justify-around m-6 p-6 flex-col md:flex-row gap-8 md:items-start items-center md:text-start text-center">
        <div>
          <p className="md:text-xl border-b-2 w-fit cursor-default text-lg md:w-fit w-full">
            Get in touch
          </p>
          <ul>
            <li className="duration-400 hover:scale-125 w-fit my-2 md:w-fit w-full">
              <a href="mailto:the_caesar001@hotmail.com" target="_blank">
                <img
                  src={emailIcon}
                  alt="Email:"
                  height="35px"
                  width="35px"
                  className="inline mr-2"
                />
                <span className="hidden md:inline">
                  the_caesar001@hotmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-y-4
      "
        >
          <p className="md:text-xl text-lg border-b-2 cursor-default md:w-fit w-full">
            Connect
          </p>
          <ul className="flex flex-row md:flex-col gap-4">
            <li className="duration-400 hover:scale-125 w-fit">
              <a
                href="https://www.linkedin.com/in/armin-duric-354486166/"
                target="_blank"
              >
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  height="35px"
                  width="35px"
                  className="inline mr-2"
                />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </li>
            <li className="duration-400 hover:scale-125 w-fit">
              <a href="https://twitter.com/HardcoreAgent" target="_blank">
                <img
                  src={xLogo}
                  alt="Twitter/X"
                  className="bg-white rounded-lg inline mr-2"
                  height="35px"
                  width="35px"
                />
                <span className="hidden md:inline">Twitter/X</span>
              </a>
            </li>
            <li className="duration-400 hover:scale-125 w-fit">
              <a href="https://app.daily.dev/muttenroshi" target="_blank">
                <img
                  src={dailyDevLogo}
                  alt="Daily Dev"
                  className="inline mr-2"
                  height="35px"
                  width="35px"
                />
                <span className="hidden md:inline">Dev Community</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="md:text-xl text-lg border-b-2 w-fit cursor-default">
            Portfolio site
          </p>
          <ul>
            <li className="my-2 duration-400 hover:scale-125 md:w-fit w-full">
              <a href="https://portfolio-site-v1-2.vercel.app/" target="_blank">
                <img
                  src={portfolioIcon}
                  alt=""
                  height="35px"
                  width="35px"
                  className="inline mr-2"
                />
                <span className="hidden md:inline">Check out my site!</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center mb-4 cursor-default text-slate-400">
          &copy; {year} Armin D. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
