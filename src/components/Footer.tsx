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
      <div className="flex justify-around m-6 p-6">
        <div>
          <p className="text-xl border-b-2 w-fit cursor-default">
            Get in touch
          </p>
          <ul>
            <li className="transition duration-400 hover:scale-125 w-fit my-2">
              <a href="mailto:the_caesar001@hotmail.com" target="_blank">
                <img
                  src={emailIcon}
                  alt="Email:"
                  height="35px"
                  width="35px"
                  className="inline mr-2"
                />
                the_caesar001@hotmail.com
              </a>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-y-4
      "
        >
          <p className="text-xl border-b-2 w-fit cursor-default">Connect</p>
          <ul>
            <li className="transition duration-400 hover:scale-125 w-fit">
              <a
                href="https://www.linkedin.com/in/armin-duric-354486166/"
                target="_blank"
              >
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  height="30px"
                  width="30px"
                  className="inline mr-2"
                />
                LinkedIn
              </a>
            </li>
            <li className="transition duration-400 hover:scale-125 w-fit">
              <a href="https://twitter.com/HardcoreAgent" target="_blank">
                <img
                  src={xLogo}
                  alt="Twitter/X"
                  className="bg-white rounded-lg my-2 inline mr-2"
                  height="35px"
                  width="35px"
                />
                Twitter/X
              </a>
            </li>
            <li className="transition duration-400 hover:scale-125 w-fit">
              <a href="https://app.daily.dev/muttenroshi" target="_blank">
                <img
                  src={dailyDevLogo}
                  alt="Daily Dev"
                  className="inline mr-2"
                  height="35px"
                  width="35px"
                />
                Dev Community
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl border-b-2 w-fit cursor-default">
            Prtfolio site
          </p>
          <ul>
            <li className="my-2 transition duration-400 hover:scale-125">
              <a href="https://portfolio-site-v1-2.vercel.app/" target="_blank">
                <img
                  src={portfolioIcon}
                  alt=""
                  height="35px"
                  width="35px"
                  className="inline mr-2"
                />
                Check out my site!
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center mb-4 cursor-default">
          &copy; {year} Armin D. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
