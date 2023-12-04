import { FaDownload } from "react-icons/fa";

const navbarStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "5rem",
  backgroundColor: "#000000",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  borderRadius: "15px",
};

const Navbar = () => {
  return (
    <div className="pt-4">
      <div className="lg:container mx-auto justify-center" style={navbarStyles}>
        <h1 className="text-3xl text-white">Overflow</h1>
        <div className="flex items-center gap-1">
          <a
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded hover:bg-slate-800"
          >
            <FaDownload style={{ color: "white" }} />
            <p className="text-white">Download Desktop Client</p>
          </a>
          <button className="rounded-lg pointer px-4 ml-2 text-white py-2 bg-furfle">
            Register / Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
