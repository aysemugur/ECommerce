const Footer = () => {
  return (
    <footer className="bg-white  px-0 w-full">
      {/* Main footer content */}

      <div className="flex flex-col gap-4 w-full drop-shadow-md  py-16 px-8 pb-5 md:flex-row md:justify-between  bg-gray-50 md:py-12 ">
        <h1 className="text-top font-bold  text-xl">Fashion Passion</h1>
        <div className="flex space-x-4">
          <a href="#" className="text-[#23a6f0] hover:opacity-80">
            <i className="fa-brands fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="text-[#23a6f0] hover:opacity-80">
            <i className="fa-brands fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-[#23a6f0] hover:opacity-80">
            <i className="fa-brands fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-12 px-8 md:flex-row md:justify-between md:w-full md:gap-1">
        {/* Company Info Section */}
        <div className="flex flex-col space-y-4  ">
          <h2 className="text-top font-bold text-xl">Company info</h2>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Carrier
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              We are hiring
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Blog
            </a>
          </div>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-top font-bold text-xl">Legal</h2>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Carrier
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              We are hiring
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Blog
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-top font-bold text-xl">Features</h2>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Business Marketing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              User Analytic
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Live Chat
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Unlimited Support
            </a>
          </div>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-top font-bold text-xl">Resources</h2>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              iOS & Android
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Watch a Demo
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Customers
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              API
            </a>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-top font-bold text-xl">Get In Touch</h2>

          <div className="flex max-w-md mb-0">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4  text-sm text-gray-700 bg-white border border-gray-300 rounded-l outline-none placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button className="px-4 py-4 text-white text-sm bg-blue-500 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 pb-3 text-xs font-normal">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 py-4 px-[85px] mb-0 text-center text-xs font-semibold md:text-left md:pl-8 text-gray-500  bg-gray-50">
        Made With Love By Figmaland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
