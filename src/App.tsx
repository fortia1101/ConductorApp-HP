import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./views/Main";
import Problems from "./views/Problems";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/problems" element={<Problems />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
