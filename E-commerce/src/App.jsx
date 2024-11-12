import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "../src/layout/Header.jsx";
import Menu from "../src/layout/Menu.jsx";
import PageContent from "../src/layout/PageContent.jsx";
import Footer from "../src/layout/Footer.jsx";
function App() {
  return (
    <div className="flex flex-col ">
      <Header />
      <Menu />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
