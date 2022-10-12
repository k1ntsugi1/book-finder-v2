import { Button, ListGroup, Form } from "react-bootstrap"
import { FormikProps, useFormik } from 'formik';
import cn from 'classnames';
import SearchSection from './sidebar/SearchSection';
import SubjectSection from "./sidebar/SubjectSection";
import FilteringSection from "./sidebar/FilteringSection";
import SortingSection from "./sidebar/SortingSection";
import TypeSection from "./sidebar/TypeSection";
import * as Yup from 'yup';

interface FormProps {
    showStateOfForm: string,
};

interface InitialValue {
    currentNameOfItem: string,
    currentAuthorOfItem: string,
    currentTypeOfCategory: string,
    currentTypeOfSort: string,
    currentTypeOfItem: string,
    currentTypeOfFilter: string,
}

export interface Props {
    formik: FormikProps<InitialValue>
}

const FormSection: React.FC<FormProps> = (props) => {
    const { showStateOfForm } = props;

    const classnamesOfFormSection = cn(
        'container-glass',
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
            currentTypeOfSort: 'relevance',
            currentTypeOfItem: 'books',
            currentTypeOfFilter: 'full',
        },
        validationSchema:  inputSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => { console.log(values) },
    })

    return (
        <div className={classnamesOfFormSection}>
            <div className="back-face-of-glass b-rad-10" style={{ background: 'transparent' }}></div>
            <Form noValidate className='front-face-of-glass' onSubmit={formik.handleSubmit}>
                <ListGroup>
                    <ListGroup.Item className="bg-transparent border-0">
                        <SearchSection formik={formik} />
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-transparent border-0">
                        <SubjectSection formik={formik} />
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-transparent border-0">
                        <SortingSection formik={formik} />
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

        </div>


    )
}

export default FormSection;