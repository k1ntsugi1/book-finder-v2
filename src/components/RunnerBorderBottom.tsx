import cn from 'classnames';

interface IRunnerBorderBottom {
    children: React.ReactNode,
    classNamesOfContainerWrapper?: string,
    classNamesOfChildrenWrapper?: string, 
}

const RunnerBorderBottom: React.FC<IRunnerBorderBottom> = (props) => {
    const { children, classNamesOfContainerWrapper, classNamesOfChildrenWrapper } = props;

    const classNameOfContainerWrapper = cn('wrapper-runner-border-bottom', classNamesOfContainerWrapper);

    return (
        <div className={classNameOfContainerWrapper}>
            <div className={classNamesOfChildrenWrapper}>
                {children}
            </div>
            <div className="background-color-text runner-border-bottom" ></div>
        </div>
    )
};

export default RunnerBorderBottom;