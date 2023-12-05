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
            <h1 className="font-semibold text-2xl mb-8">Useful Links</h1>
            <a href="/" className="leading-10">
              About Us
            </a>
            <a href="/" className="leading-10">
              Privacy Policy
            </a>
            <a href="/" className="leading-10">
              News & Media
            </a>
            <a href="/" className="leading-10">
              More Products
            </a>
            <a href="/" className="leading-10">
              Customer Support
            </a>
          </div>
          <div className="flex flex-col leading-8">
            <h1 className="font-semibold text-2xl mb-8">My Links</h1>
            <a
              href="https://www.linkedin.com/in/abhinnkrishn/"
              target="_blank"
              rel="noreferrer"
              className="leading-10"
            >
              linkedin/abhinnkrishn
            </a>
            <a
              href="https://github.com/abhinnxo"
              target="_blank"
              rel="noreferrer"
              className="leading-10"
            >
              github/abhinnxo
            </a>
            <a
              href="https://www.abhinn.xyz"
              target="_blank"
              rel="noreferrer"
              className="leading-10"
            >
              abhinn.xyz
            </a>
            <a
              href="https://www.instagram.com/abhinnxo/"
              target="_blank"
              rel="noreferrer"
              className="leading-10"
            >
              instagram/abhinnxo
            </a>
            <a
              href="https://twitter.com/abhinnxo"
              target="_blank"
              rel="noreferrer"
              className="leading-10"
            >
              X/abhinnxo
            </a>
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
