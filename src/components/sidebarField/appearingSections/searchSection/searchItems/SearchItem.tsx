import { Form } from 'react-bootstrap';
import { ISearchItemsProps } from '../interfaces';

const SearchItem: React.FC<ISearchItemsProps> = (props) => {

    const { 
        values: { currentNameOfItem, currentAuthorOfItem },
        errors,
        handleChange 
    } = props.formik;

    return (
        <>
            <Form.Group>
                <Form.Label>Enter Book-name</Form.Label>
                <Form.Control
                    type="text"
                    name="currentNameOfItem"
                    value={currentNameOfItem}
                    onChange={handleChange}
                    aria-label="searchByName"
                    placeholder="enter Book-name" 
                    isInvalid={!!errors.currentNameOfItem}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Author</Form.Label>
                <Form.Control
                    type="text"
                    name="currentAuthorOfItem"
                    value={currentAuthorOfItem}
                    onChange={handleChange}
                    aria-label="searchByAuthor"
                    placeholder="enter author" />
            </Form.Group>
        </>
    )
}

export default SearchItem;