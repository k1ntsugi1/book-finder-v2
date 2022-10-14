
interface IRotateCard {
    backFaceOfCard: React.ReactNode,
    frontFaceOfCard: React.ReactNode,
}

const RotateCard: React.FC<IRotateCard> = (props) => {
    const {
        backFaceOfCard,
        frontFaceOfCard
    } = props;

    return (
        <div className="rotate-container">
            <div className="rotate-card back-face-of-card centered-content">
                {backFaceOfCard}
            </div>
            <div className="rotate-card front-face-of-card centered-content" style={{ 'background': 'var(--color-sidebar)' }}>
                {frontFaceOfCard}
            </div>
        </div>
    )
};

export default RotateCard;