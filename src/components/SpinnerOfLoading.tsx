import { MagnifyingGlass } from 'react-loader-spinner';

const SpinnerOfLoading: React.FC = () => {
  return (
    <div className="centered-content w-100">
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="rgb(248 249 250 / 54%)"
        color="var(--color-text)"
      />
    </div>
  );
};

export default SpinnerOfLoading;
