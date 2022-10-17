import { MagnifyingGlass } from 'react-loader-spinner'

const Spinner: React.FC = () => {
    return (
        <div className='centered-content w-100'>
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='var(--color-body)'
                color='var(--color-text)'
            />
        </div>
    )
};

export default Spinner;