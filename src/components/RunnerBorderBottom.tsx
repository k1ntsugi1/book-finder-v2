interface IRunnerBorderBottom {
    children: React.ReactNode;
}

const RunnerBorderBottom: React.FC<IRunnerBorderBottom> = (props) => {
    return (
        <div className="wrapper-runner-border-bottom cursor-pointer">
            <div>
                {props.children}
            </div>
            <div className="runner-border-bottom" style={{ 'background': 'var(--color-text)' }}></div>
        </div>
    )
};

export default RunnerBorderBottom;