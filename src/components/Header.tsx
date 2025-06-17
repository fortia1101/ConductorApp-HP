import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <div className="header-area flex justify-between align-center">
            <Link to={"/"}>
                <img className="app-icon rounded-md" src="./img/app-icon.png" />
            </Link>
            <div className="flex align-center gap-8">
                <Link to={"/"}>トップ</Link>
                <Link to={"/problems"}>不具合情報</Link>
                <a href="https://forms.gle/S5hXTg51YKyVdTDGA" target="_blank" rel="noopener noreferrer">
                    お問合せ
                </a>
            </div>
        </div>
    );
};

export default Header;
