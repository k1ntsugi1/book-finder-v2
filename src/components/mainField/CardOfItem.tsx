import { Card } from 'react-bootstrap';
import { ParsedItem } from '../../helpersFunc/parseResponseItems';
import GlassElement from '../GlassElement';

const CardOfItem: React.FC<{ item: ParsedItem }> = ({ item }) => {

    return (
            <GlassElement
                key={item.id}
                classesOfContainer='border rounded'
                classesOfFrontFace='border rounded'
                stylesOfContainer={{
                    'background': 'var(--color-card)',
                    'color': 'var(--color-text)',
                    'width': '200px',
                    'height': '200px',
                }}
            >
                <Card className="h-100 bg-transparent">

                    <Card.Img variant="top" src={item.imgUrl} className="mx-auto mt-3 w-50 shadow-lg" alt="imgBook" style={{ width: '100px', height: '100px' }} />

                    <Card.Body className="px-1 my-auto ">

                        <Card.Title className="text-center text-nowrap text-truncate">{item.name}</Card.Title>

                    </Card.Body>
                </Card>
            </GlassElement>
    )
}

export default CardOfItem;