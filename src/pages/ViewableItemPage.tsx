import GlassElement from "../components/GlassElement";
import EmptyResultOfSearching from "../components/mainField/EmptyResultOfSearching";

import { useAppSelector } from "../store/hooks";
import { selectorsResultOfSearching } from "../store/slices/resultOfSearchingSlice";


const ViewableItemPage: React.FC = () => {
    const activeItemId = useAppSelector(store => store.resultOfSearching.activeItemId)
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
                                        : <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                        </svg>
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
                                        && <p className="text-nowrap"><span className="text-decoration-underline ">printType:</span> {printType}</p>
                                    }
                                    {
                                        language
                                        && <p className="text-nowrap"><span className="text-decoration-underline ">language:</span> {language}</p>
                                    }
                                </div>
                                <div className="d-flex flex-column">
                                    {
                                        pageCount
                                        && <p className="text-nowrap"><span className="text-decoration-underline ">pageCount:</span> {pageCount}</p>
                                    }
                                    {
                                        publisher
                                        && <p className="text-nowrap"><span className="text-decoration-underline ">publisher:</span> {publisher}</p>
                                    }
                                    {
                                        publishedDate
                                        && <p className="text-nowrap"><span className="text-decoration-underline ">publishedDate:</span> {publishedDate}</p>
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