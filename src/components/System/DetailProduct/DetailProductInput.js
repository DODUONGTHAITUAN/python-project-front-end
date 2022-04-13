import { FormGroup, Label, Input, Col } from 'reactstrap';

const DetailProductInput = (props) => {
    const { item } = props;
    return (
        <Col className={item.className}>
            <FormGroup>
                <Label for={item.key}>{item.label}</Label>
                <Input id={item.key} placeholder={item.placeholder} />
            </FormGroup>
        </Col>
    );
};

export default DetailProductInput;
