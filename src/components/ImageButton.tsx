type ImageButtonProps = { //here the props are defined
    image: string;
    onClick: () => void;
};

export default function ImageButton({ image, onClick }: ImageButtonProps) { //here the props are used / or set as a parameter
    return (
        <>
            <button className="imageButton">
                <img src={image} alt="A button" onClick={onClick} style={{ width: "70px", height: "70px" }} /> {/* here the props are set*/}
            </button>
        </>
    );
}
