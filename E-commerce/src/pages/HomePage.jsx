import Header from "../layout/Header.jsx";
import Menu from "../layout/Menu.jsx";
import PageContent from "../layout/PageContent.jsx";
import Footer from "../layout/Footer.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Menu />
      <PageContent />
      <Footer />
    </div>
  );
};
export default HomePage;
