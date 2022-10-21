import GlassElement from "../components/GlassElement";
import EmptyResultOfSearching from "../components/mainField/EmptyResultOfSearching";

import { useAppSelector } from "../store/hooks";
import { selectorsResultOfSearching } from "../store/slices/resultOfSearchingSlice";


const ItemPage: React.FC = () => {
    const activeItemId = useAppSelector(store => store.resultOfSearching.activeItemId)
    const item = useAppSelector(store => selectorsResultOfSearching.selectById(store, activeItemId!));
    const {
        imgUrl = null,
        name = '',
        categories = '',
        authors = '',
        description = '',
    } = item ?? {}
    return (
        activeItemId === null
            ? <EmptyResultOfSearching />
            : (
                <GlassElement
                    style={{
                        'background': 'var(--color-sidebar)',
                        'color': 'var(--color-text)'
                    }}
                    className="px-4 d-flex flex-column justify-content-around rounded"
                >
                    <div className="d-flex flex-nowrap justify-content-around gap-4">
                        {
                            imgUrl
                                ? <img src={item!.imgUrl} alt="ImgBook" width="100px" />
                                : <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                                </svg>
                        }
                        <div className="d-flex flex-column flex-nowrap gap-1">

                            <div className="fw-bold fs-3">{name}</div>
                            <div className="text-decoration-underline">categories: {categories}</div>

                            <div className="fw-bold">authors: {authors}</div>
                        </div>

                    </div>

                    <div className="mb-3 p-3 w-100 border overflow-auto" style={{ height: '300px' }}>{description}</div>

                </GlassElement>
            )
    )
}

export default ItemPage