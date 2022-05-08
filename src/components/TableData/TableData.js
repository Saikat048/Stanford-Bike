
import { Button, Card } from 'react-bootstrap';  

const TableData = (props) => {
    console.log(props) 
    const {item, handleDelete} = props;
    const { name, _id, price, quantity, supplier } = item;
 

    return (
        <div>
            <Card>
                <Card.Header as="h5"><b>Name</b> : {name}</Card.Header>
                <Card.Body>  
                    <p><b>Price</b> : {price}</p>
                    <p><b>Stock</b> : {quantity}</p>
                    <p><b>Supplier Name</b> : {supplier}</p>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TableData;