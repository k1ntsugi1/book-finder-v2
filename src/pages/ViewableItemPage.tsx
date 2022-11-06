import cn from 'classnames';
import GlassElement from "../components/GlassElement";
import EmptyResultOfSearching from "../components/mainField/EmptyResultOfSearching";

import { useAppSelector } from "../store/hooks";
import { selectorsDataOfSearchedItems } from "../store/slices/dataOfSearchedItemsSlice";

import { ReactComponent as CardImage } from '../assets/svg/card-image.svg'

const ViewableItemPage: React.FC = () => {
    const activeItemId = useAppSelector(store => store.dataOfSearchedItems.activeItemId)
    const item = useAppSelector(store => selectorsDataOfSearchedItems.selectById(store, activeItemId!));
    const classNamesOfParagraph = cn('paragraph-viewable-page text-wrap');
    const classNamesOfItemsBlock = cn('d-flex flex-wrap gap-3')
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
                    className="color-text mx-3 p-4 d-flex flex-column justify-content-between gap-5 rounded overflow-auto scrollbar"
                >

                    <div className='d-flex flex-column flex-nowrap'>
                        {titleOfPage.map((dataOfItem, index) => dataOfItem && <p key={index} className="fw-bold fs-3">{dataOfItem}</p>)}
                    </div>

                    <div>
                        <p className="fw-bold fs-4">Параметры:</p>
                        <div className="d-flex flex-wrap align-self-center gap-2">
                            <div className={classNamesOfItemsBlock}>
                                {
                                    authors
                                    && <p className={classNamesOfParagraph}>
                                        <span >authors:</span> {authors}
                                    </p>
                                }
                                {
                                    categories
                                    && <p className={classNamesOfParagraph}>
                                        <span>categories:</span> {categories}
                                    </p>
                                }
                                {
                                    printType
                                    && <p className={classNamesOfParagraph}>
                                        <span>printType:</span> {printType}
                                    </p>
                                }
                                {
                                    language
                                    && <p className={classNamesOfParagraph}>
                                        <span>language:</span> {language}
                                    </p>
                                }
                            </div>

                            <div className={classNamesOfItemsBlock}>
                                {
                                    pageCount
                                    && <p className={classNamesOfParagraph}>
                                        <span>pageCount:</span> {pageCount}
                                    </p>
                                }
                                {
                                    publisher
                                    && <p className={classNamesOfParagraph}>
                                        <span>publisher:</span> {publisher}
                                    </p>
                                }
                                {
                                    publishedDate
                                    && <p className={classNamesOfParagraph}>
                                        <span>publishedDate:</span> {publishedDate}
                                    </p>
                                }
                            </div>

                        </div>
                    </div>


                    <div className="d-flex justify-content-start flex-wrap gap-5">
                        <div className="align-self-center">
                            {
                                imgUrl
                                    ? <img src={imgUrl} alt="ImgBook" height="200px" />
                                    : <CardImage width="200" height="200" />
                            }
                        </div>



                        <div className="scrollbar py-2 w-100 overflow-auto align-self-center border-top border-bottom"
                            style={{ 'maxHeight': '250px', 'maxWidth': '900px' }}
                        >
                            {
                                description
                                    ? description
                                    : <div style={{ 'width': '100%', 'height': '200px' }}></div>
                            }
                        </div>


                    </div>

                </GlassElement>
            )
    )
}

export default ViewableItemPage