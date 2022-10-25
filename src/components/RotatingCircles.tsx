
const ColorRunner: React.FC = () => {
    return (
        <div 
            className="wrapper-rotating-circles"
            style={{'background': 'linear-gradient(145deg, white 40%, var(--color-body))'}}
            data-element='color-spinner'
        >
            <div className="container-rotating-circles">
            <div className='circle circle-1'></div>
            <div className='circle circle-2'></div>
            <div className='circle circle-3'></div>
            <div className='circle circle-4'></div>
            </div>

        </div>

    )
};

export default ColorRunner;