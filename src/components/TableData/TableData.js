 import { Button, Card } from 'react-bootstrap'; 

const TableData = (props) => {
    console.log(props) 
    const {item, handleDelete} = props
    const { name, _id, price, quantity } = item;
 

   
    
    return (
        <div>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TableData;