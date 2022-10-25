import GlassElement from "../components/GlassElement";
import EmptyResultOfSearching from "../components/mainField/EmptyResultOfSearching";

import { useAppSelector } from "../store/hooks";
import { selectorsResultOfSearching } from "../store/slices/resultOfSearchingBySearchingOptionsSlice";

import CardImageSVGElement from "../components/SVGElements/CardImageSVGElement";

const ViewableItemPage: React.FC = () => {
    const activeItemId = useAppSelector(store => store.resultOfSearchingBySearchingOptions.activeItemId)
    const item = useAppSelector(store => selectorsResultOfSearching.selectById(store, activeItemId!));

    const {
        imgUrl,
        title,
        subtitle,

        authors,
        categories,

        publisher,
        publishedDate,
        printType,
        pageCount,
        language,

        description,
    } = item ?? {};

    const titleOfPage = [title, subtitle];

    return (
        activeItemId === null
            ? <EmptyResultOfSearching />
            : (
                <GlassElement
                    style={{
                        'color': 'var(--color-text)'
                    }}
                    className="mx-3 px-4 d-flex flex-column justify-content-start gap-5 rounded overflow-hidden"
                >

                    <div className='d-flex flex-column flex-nowrap'>
                        {titleOfPage.map((dataOfItem, index) => dataOfItem && <p key={index} className="fw-bold fs-3">{dataOfItem}</p>)}
                    </div>

                    <div className="d-flex flex-nowrap flex-column justify-content-between gap-3">
                        <div className="d-flex gap-5 justify-content-start">
                            <div>
                                {
                                    imgUrl
                                        ? <img src={imgUrl} alt="ImgBook" height="200px" />
                                        : <CardImageSVGElement width="200" height="200" />
                                }
                            </div>

                            <div className="d-flex flex-wrap gap-5 align-self-center">
                                <div className="d-flex flex-column">
                                    {
                                        authors
                                        && <p className="text-nowrap">
                                            <span className="text-decoration-underline ">authors:</span> {authors}
                                        </p>
                                    }
                                    {
                                        categories
                                        && <p className="text-nowrap">
                                            <span className="text-decoration-underline ">categories:</span> {categories}
                                        </p>
                                    }
                                    {
                                        printType
                                        && <p className="text-nowrap">
                                            <span className="text-decoration-underline ">printType:</span> {printType}
                                        </p>
                                    }
                                    {
                                        language
                                        && <p className="text-nowrap">
                                            <span className="text-decoration-underline ">language:</span> {language}
                                        </p>
                                    }
                                </div>
                                
                                <div className="d-flex flex-column">
                                    {
                                        pageCount
                                        && <p className="text-nowrap">
                                            <span className="text-decoration-underline ">pageCount:</span> {pageCount}
                                        </p>
                                    }
                                    {
                                        publisher
                                        && <p className="text-nowrap">
                                            <span className="text-decoration-underline ">publisher:</span> {publisher}
                                        </p>
                                    }
                                    {
                                        publishedDate
                                        && <p className="text-nowrap">
                                            <span className="text-decoration-underline ">publishedDate:</span> {publishedDate}
                                        </p>
                                    }
                                </div>

                            </div>

                        </div>

                    </div>
                    {description && <div className="border-top border-bottom my-3 py-2 w-100 overflow-auto align-self-center" style={{ 'maxHeight': '300px' }}>{description}</div>}
                </GlassElement>
            )
    )
}

export default ViewableItemPage