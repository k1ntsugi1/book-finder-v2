
const ColorRunner: React.FC = () => {
    return (
        <div 
            className="wrapper-color overflow-hidden"
            style={{'background': 'linear-gradient(145deg, white 40%, var(--color-body))'}}
        >
            <div className="container-color d-flex justify-content-center flex-wrap">
            <div className='color color-1'></div>
            <div className='color color-2'></div>
            <div className='color color-3'></div>
            <div className='color color-4'></div>
            </div>

        </div>

    )
};

export default ColorRunner;