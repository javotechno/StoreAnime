

const ImgCard = ({ cssClass, img }) => {
    return (
        <div className={ cssClass }>
            <img src={`${img}.jpg`} />
        </div>
    );
}

export default ImgCard;
