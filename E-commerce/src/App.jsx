import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "../src/layout/Header.jsx";
import HeaderTop from "../src/layout/HeaderTop.jsx";

function App() {
  return (
    <div>
      <HeaderTop />
      <Header />
    </div>
  );
}

export default App;
