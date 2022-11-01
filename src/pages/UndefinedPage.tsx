import GlassElement from "../components/GlassElement"
import EmojiFrownSVGElement from "../components/SVGElements/EmojiFrownSVGElement"

const UndefinedPage: React.FC = () => {
    return (
        <GlassElement
            className='color-text align-self-center border rounded'
            style={{
                'width': '200px',
                'height': '100px',
            }}
        >
            <div className="h-100 centered-content border rounded">
                <EmojiFrownSVGElement width="25" height="25"/>
                <span className="ps-3" ref={textRef}>{t("mainField.emptyResult")}</span>
                <span
                    className="background-color-text blinking"
                    style={{
                        'width': '3px',
                        'height': '1rem'
                    }}></span>
            </div>
        </GlassElement>
    )
}