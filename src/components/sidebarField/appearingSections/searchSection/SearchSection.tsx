import cn from 'classnames';
import { useNavigate } from "react-router-dom";
import { FormikProps, useFormik } from 'formik';
import { Button, ListGroup, Form } from "react-bootstrap"


import SearchItem from './searchItems/SearchItem';
import SubjectItem from "./searchItems/SubjectItem";
import OrderByItem from "./searchItems/OrderByItem";
import FilterItem from "./searchItems/FilterItem";
import TypeItem from "./searchItems/TypeItem";

import fetchDataAsyncThunk from "../../../../store/fetchDataAsyncThunk";
import { useAppDispatch } from '../../../../store/hooks';

import { actionsResultOfSearching } from '../../../../store/resultOfSearchingSlice'
import { actionsUiActiveElementsOfSidebar } from "../../../../store/uiActiveElementsOfSidebar";

import validationSchema from './validationSchema'

import { IInitialValueOfFormik } from './interfaces';

import ProviderOfSearchOptions from './context/ProviderOfSearchOptions';

const SearchSection: React.FC<{ showStateOfForm: string }> = (props) => {

    const { showStateOfForm } = props;
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();

    const formItems = [
        SearchItem,
        SubjectItem,
        OrderByItem,
        FilterItem,
        TypeItem
    ]

    const classnamesOfListGroupItems = cn('bg-transparent border-0');

    const classnamesOfFormSection = cn(
        'h-100',
        'vw-20',
        'transitionSidebar',
        'position-absolute',
        'start-100',
        'top-0',
        {
            'opacity-100 ': showStateOfForm === 'visible' ? true : false,
            'opacity-0 ': showStateOfForm === 'visible' ? false : true,
        });

    const formik: FormikProps<IInitialValueOfFormik> = useFormik<IInitialValueOfFormik>({
        initialValues: {
            currentNameOfItem: '',
            currentAuthorOfItem: '',
            currentTypeOfCategory: 'all',
            currentTypeOfOrder: 'relevance',
            currentTypeOfItem: 'books',
            currentTypeOfFilter: 'full',
        },
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => {
            const { currentNameOfItem, currentAuthorOfItem } = values;
            const searchParams = {
                ...values,
                currentNameOfItem: currentNameOfItem.trim(),
                currentAuthorOfItem: currentAuthorOfItem.trim(),
            }
            appDispatch(fetchDataAsyncThunk(searchParams));
            appDispatch(actionsResultOfSearching.removeItems());
            appDispatch(actionsUiActiveElementsOfSidebar.setActivePage({ page: 'result' }))
            navigate('/result');
        },
    })

    return (
        <ProviderOfSearchOptions>
            <Form
                noValidate
                className={classnamesOfFormSection}
                onSubmit={formik.handleSubmit}
                style={{ 'background': 'var(--color-sidebar)' }}
            >
                <ListGroup style={{ 'color': 'var(--color-text)' }} className="d-flex flex-column align-items-start">

                    {formItems.map((Item, index) => (
                        <ListGroup.Item className={classnamesOfListGroupItems}>
                            <Item key={index} formik={formik} />
                        </ListGroup.Item>
                    ))}

                    <ListGroup.Item className={classnamesOfListGroupItems}>
                        <Button type="submit" className="bg-transparent border-0">Submit</Button>
                    </ListGroup.Item>

                    <ListGroup.Item className={classnamesOfListGroupItems}>
                        <Button className="bg-transparent border-0">reset all params</Button>
                    </ListGroup.Item>

                </ListGroup>
            </Form>
        </ProviderOfSearchOptions>

    )
}

export default SearchSection;