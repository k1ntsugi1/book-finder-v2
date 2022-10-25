import cn from 'classnames'
import { Button } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchDataAsyncThunk from "../../store/fetchDataAsyncThunk";

import { actionsDataOfSearching } from "../../store/slices/dataOfSearchingOptionsSlice";
import { actionsResultOfSearching } from "../../store/slices/resultOfSearchingBySearchingOptionsSlice";


const Loader: React.FC = () => {
    const appDispatch = useAppDispatch();
    const { searchParams, range: { startIndex, maxResults } } = useAppSelector(store => store.dataOfSearching);
    const { totalItems } = useAppSelector(store => store.resultOfSearching);
    const pagesCount = Math.floor(totalItems / maxResults);
    const classnamesOfButton = cn('border');
    
    const stylesOfBtn = {
        'border': '1px solid var(--color-text)',
        'border-radius': '0'
    };

    const loadItems = () => {
        appDispatch(fetchDataAsyncThunk(searchParams))
    }

    const loadNextItems = () => {
        appDispatch(actionsResultOfSearching.removeItems())
        appDispatch(fetchDataAsyncThunk(searchParams))
    };
    const loadPreviousItems = () => {
        appDispatch(actionsResultOfSearching.removeItems());
        appDispatch(actionsDataOfSearching.decreaseStartIndex());
        appDispatch(fetchDataAsyncThunk({...searchParams}))
    };

    return (
        <div className="d-flex justify-content-between position-relative w-100 mx-5" style={{'color': 'var(--color-text)'}}>
            <div>
                <Button variant="" style={stylesOfBtn}>1</Button>
                <Button variant="" style={stylesOfBtn}>2</Button>
            </div>
            <Button variant="" style={stylesOfBtn} onClick={loadItems}>LOAD</Button>
            <div>
                { startIndex > maxResults  && <Button variant="" style={stylesOfBtn} onClick={loadPreviousItems}>BACK</Button>}
                <Button variant="" style={stylesOfBtn} onClick={loadNextItems}>NEXT</Button>
            </div>
        </div>
    )
};


export default Loader;