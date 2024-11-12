const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:px-8">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Get In Touch Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-[#1a237e] font-bold text-xl">Get In Touch</h2>
            <p className="text-gray-600">
              the quick fox jumps over the lazy dog
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#4267B2] hover:opacity-80">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-[#E1306C] hover:opacity-80">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-[#1DA1F2] hover:opacity-80">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="flex flex-col space-y-4">
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

          {/* Features Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-[#1a237e] font-bold text-xl">Features</h2>
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
            <h2 className="text-[#1a237e] font-bold text-xl">Resources</h2>
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
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 px-[85px] border-t  border-gray-200 text-center md:text-center text-gray-600">
          Made With Love By Figmaland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
