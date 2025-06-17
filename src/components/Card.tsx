import "./Card.css";

const Card: React.FC<{ message: string; imageSrc: string }> = ({ message, imageSrc }) => {
    return (
        <div className="card m-3 p-4 flex flex-col justify-center gap-3 text-center rounded-xl">
            <p>{message}</p>
            <img src={imageSrc} />
        </div>
    );
};

export default Card;
