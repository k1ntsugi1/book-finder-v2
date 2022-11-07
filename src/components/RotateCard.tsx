import cn from 'classnames';

interface IRotateCard {
  backFaceOfCard: React.ReactNode;
  frontFaceOfCard: React.ReactNode;
  classnames?: string;
}

const RotateCard: React.FC<IRotateCard> = (props) => {
  const { backFaceOfCard, frontFaceOfCard, classnames } = props;

  const classnamesOfCotainer = cn('rotate-container', classnames);

  return (
    <div className={classnamesOfCotainer}>
      <div className="rotate-card back-face-of-card">{backFaceOfCard}</div>
      <div className="rotate-card front-face-of-card">{frontFaceOfCard}</div>
    </div>
  );
};

export default RotateCard;
