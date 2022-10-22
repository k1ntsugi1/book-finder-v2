import { useRef, useEffect } from 'react';
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

import { actionsResultOfSearching } from '../../../../store/slices/resultOfSearchingSlice'
import { actionsUiActiveElementsOfSidebar } from "../../../../store/slices/uiActiveElementsOfSidebarSlice";

import validationSchema from './validationSchema'

import { IInitialValueOfFormik } from './interfaces';

import ProviderOfSearchOptions from './context/ProviderOfSearchOptions';


const SearchSection: React.FC<{ showStateOfForm: string }> = (props) => {

    const { showStateOfForm } = props;
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);

    const formItems = [
        SearchItem,
        SubjectItem,
        OrderByItem,
        FilterItem,
        TypeItem
    ]

    const classnamesOfItems = cn('ms-3 w-75 bg-transparent border-0 px-0');

    const classnamesOfFormSection = cn(
        'pt-3',
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
            appDispatch(actionsResultOfSearching.removeItems());
            appDispatch(fetchDataAsyncThunk(searchParams));
            
            appDispatch(actionsUiActiveElementsOfSidebar.setActivePage({ page: 'result' }))
            navigate('/result');
        },
    })

    useEffect(() => {
        setTimeout(() => {
            if (showStateOfForm === 'unvisible') formRef.current!.style.visibility = 'hidden';
        }, 400);
        if (showStateOfForm === 'visible') formRef.current!.style.visibility = '';
    }, [showStateOfForm]);


    return (
        <ProviderOfSearchOptions>
            <Form
                noValidate
                className={classnamesOfFormSection}
                onSubmit={formik.handleSubmit}
                style={{ 'background': 'var(--color-sidebar)' }}
                ref={formRef}
            >
                <div style={{ 'color': 'var(--color-text)' }} className="d-flex flex-column align-items-start gap-2">

                    {formItems.map((Item, index) => (

                        <Item key={index} formik={formik} className={classnamesOfItems} />

                    ))}
                    <div className="mx-auto d-flex flex-column align-items-center">

                        <Button type="submit" className="bg-transparent border-0">Submit</Button>



                        <Button className="bg-transparent border-0">reset all params</Button>

                    </div>


                </div>
            </Form>
        </ProviderOfSearchOptions>

    )
}

export default SearchSection;