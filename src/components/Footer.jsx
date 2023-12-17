import Overflow from "../assets/overflow-logo.png";

const Footer = () => {
  return (
    <div className="bg-furfle">
      <div className="bg-furfle py-10 lg:container mx-auto text-white">
        <img
          src={Overflow}
          width="250px"
          alt="overflow logo"
          className="mx-auto pb-10"
        />
        <div className="flex justify-between md:container">
          <div className="flex flex-col leading-8">
            <h1 className="font-semibold text-2xl mb-8 ">Useful Links</h1>
            <span>
              <a href="/" className="leading-10 underlineeffect">
                About Us
              </a>
            </span>
            <span>
              <a href="/" className="leading-10 underlineeffect">
                Privacy Policy
              </a>
            </span>
            <span>
              <a href="/" className="leading-10 underlineeffect">
                News & Media
              </a>
            </span>
            <span>
              <a href="/" className="leading-10 underlineeffect">
                More Products
              </a>
            </span>
            <span>
              <a href="/" className="leading-10 underlineeffect">
                Customer Support
              </a>
            </span>
          </div>
          <div className="flex flex-col leading-8">
            <h1 className="font-semibold text-2xl mb-8">My Links</h1>
            <span>
              <a
                href="https://www.linkedin.com/in/abhinnkrishn/"
                target="_blank"
                rel="noreferrer"
                className="leading-10 underlineeffect"
              >
                linkedin/abhinnkrishn
              </a>
            </span>
            <span>
              <a
                href="https://github.com/abhinnxo"
                target="_blank"
                rel="noreferrer"
                className="leading-10 underlineeffect"
              >
                github/abhinnxo
              </a>
            </span>
            <span>
              <a
                href="https://www.abhinn.xyz"
                target="_blank"
                rel="noreferrer"
                className="leading-10 underlineeffect"
              >
                abhinn.xyz
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/abhinnxo/"
                target="_blank"
                rel="noreferrer"
                className="leading-10 underlineeffect"
              >
                instagram/abhinnxo
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/abhinnxo"
                target="_blank"
                rel="noreferrer"
                className="leading-10 underlineeffect"
              >
                X/abhinnxo
              </a>
            </span>
          </div>
          <div className="flex flex-col leading-8">
            <h1 className="font-semibold text-2xl mb-8">Address</h1>
            <p>P.O. Box 123, Delhi</p>
            <p>Lorem ipsum Road</p>
            <p>+91-XXXXXXXXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
