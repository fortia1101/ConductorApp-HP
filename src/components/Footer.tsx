import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-12 my-12">
            <a href="https://apps.apple.com/jp/app/id6447023792" className="app-link">
                <img src="./img/appstore-link-light.svg" />
            </a>
            <p className="copyright">
                <span className="pe-1">{new Date().getFullYear().toString()}</span>Team901
            </p>
        </div>
    );
};

export default Footer;
