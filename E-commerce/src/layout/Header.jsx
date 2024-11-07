const Header = () => {
  return (
    <div className=" hidden sm:flex w-full flex flex-col justify-between items-center">
      {/* Header (Mobil ve Masaüstü için) */}
      <div className="bg-[#17213C] text-white text-sm p-2 px-7 w-full">
        <div className="flex justify-between items-center py-1 px-0">
          {/* İletişim Bilgileri */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <i className="fas fa-phone-alt"></i>
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center space-x-1">
              <i className="fas fa-envelope"></i>
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          {/* Mesaj */}
          <div className="hidden lg:block">
            Follow Us and get a chance to win 80% off
          </div>

          {/* Sosyal Medya İkonları */}
          <div className="flex items-center space-x-3">
            <span>Follow Us :</span>
            <a href="#" className="text-white hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
