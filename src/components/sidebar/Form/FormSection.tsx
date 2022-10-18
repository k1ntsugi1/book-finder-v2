import { Button, ListGroup, Form } from "react-bootstrap"
import { FormikProps, useFormik } from 'formik';
import cn from 'classnames';
import SearchSection from './SearchSection';
import SubjectSection from "./SubjectSection";
import FilteringSection from "./FilteringSection";
import OrderBySection from "./OrderBySection";
import TypeSection from "./TypeSection";
import * as Yup from 'yup';
import fetchDataAsyncThunk from "../../../store/fetchDataAsyncThunk";
import { useAppDispatch } from '../../../store/hooks';
import GlassElement from '../../GlassElement'
import { useNavigate } from "react-router-dom";

import { actionsResultOfSearching } from '../../../store/resultOfSearchingSlice'

interface FormProps {
    showStateOfForm: string,
};

interface InitialValue {
    currentNameOfItem: string,
    currentAuthorOfItem: string,
    currentTypeOfCategory: string,
    currentTypeOfOrder: string,
    currentTypeOfItem: string,
    currentTypeOfFilter: string,
}

export interface Props {
    formik: FormikProps<InitialValue>
}

const FormSection: React.FC<FormProps> = (props) => {
    const { showStateOfForm } = props;
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    const classnamesOfFormSection = cn(
        'bg-transparent',
        'vw-20',
        'transitionSidebar',
        'position-absolute',
        'start-100',
        'top-0',
        {
            'opacity-100 ': showStateOfForm === 'visible' ? true : false,
            'opacity-0 ': showStateOfForm === 'visible' ? false : true,
        });

    const inputSchema = Yup.object().shape({
        currentNameOfItem: Yup
            .string()
            .test({
                name: 'strangeName',
                message: 'have to name',
                test: (value, testContext) => {
                    const nameOfItem = testContext.parent.currentNameOfItem ?? null
                    return !(nameOfItem === null || nameOfItem.trim() === '');
                }
            })
    })


    const formik: FormikProps<InitialValue> = useFormik<InitialValue>({
        initialValues: {
            currentNameOfItem: '',
            currentAuthorOfItem: '',
            currentTypeOfCategory: 'all',
            currentTypeOfOrder: 'relevance',
            currentTypeOfItem: 'books',
            currentTypeOfFilter: 'full',
        },
        validationSchema: inputSchema,
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
            navigate('/result');
        },
    })

    return (
            <GlassElement
                showState={showStateOfForm}
                classesOfContainer={classnamesOfFormSection}
                classesOfFrontFace="pt-4"
                stylesOfFrontFace={{ 
                    'background': 'var(--color-sidebar)',
                    'color': 'var(--color-text)'
                }}
            >
                <Form noValidate onSubmit={formik.handleSubmit} >
                    <ListGroup >
                        <ListGroup.Item className="bg-transparent border-0">
                            <SearchSection formik={formik} />
                        </ListGroup.Item>

                        <ListGroup.Item className="bg-transparent border-0">
                            <SubjectSection formik={formik} />
                        </ListGroup.Item>

                        <ListGroup.Item className="bg-transparent border-0">
                            <OrderBySection formik={formik} />
                        </ListGroup.Item>

                        <ListGroup.Item className="bg-transparent border-0">
                            <FilteringSection formik={formik} />
                        </ListGroup.Item>

                        <ListGroup.Item className="bg-transparent border-0">
                            <TypeSection formik={formik} />
                        </ListGroup.Item>

                        <ListGroup.Item className="d-flex justify-content-center bg-transparent border-0">
                            <Button type="submit" className="bg-transparent border-0">Submit</Button>
                        </ListGroup.Item>

                        <ListGroup.Item className="d-flex justify-content-center bg-transparent border-0">
                            <Button className="bg-transparent border-0">reset all params</Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Form>

            </GlassElement>
    )
}

export default FormSection;