import { Card } from 'react-bootstrap';
import { ParsedItem } from '../../helpersFunc/parseResponseItems';

const CardOfItem: React.FC<{item: ParsedItem}> = ({item}) => {

    return (
        <div className="container-glass" style={{ width: '200px', height: '200px' }} key={item.id}>
            <div className="back-face-of-glass b-rad-10 "></div>
            <div className="front-face-of-glass">
                <Card className="h-100 bg-transparent">

                    <Card.Img variant="top" src={item.imgUrl}  className="mx-auto mt-3 w-50 shadow-lg" alt="imgBook" style={{ width: '100px', height: '100px' }}/>

                    <Card.Body className="px-1 my-auto ">

                        <Card.Title className="text-center text-nowrap text-truncate">{item.name}</Card.Title>

                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CardOfItem;