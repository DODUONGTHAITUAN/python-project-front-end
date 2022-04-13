import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const inputs = [
    {
        id: 1,
        name: 'ram',
        placeholder: 'Enter ram parameter...',
    },
    {
        id: 2,
        name: 'rom',
        placeholder: 'Enter rom parameter...',
    },
    {
        id: 3,
        name: 'price',
        placeholder: 'Enter price product...',
    },
    {
        id: 4,
        name: 'image',
        placeholder: 'Enter image link...',
    },
];

const OptionForm = (props) => {
    const { option, setOption } = props;
    const [colors, setColors] = useState([]);

    const handleChangeOption = (label, value) => {
        setOption((prev) => ({
            ...prev,
            [label]: value,
        }));
    };
    useEffect(() => {
        // Call API
    }, []);
    return (
        <Form>
            {inputs.map((item) => (
                <FormGroup className='mb-2' key={item.id}>
                    <Label for={item.name}>
                        {item.name[0].toUpperCase() + item.name.slice(1)}
                    </Label>
                    <Input
                        id={item.name}
                        placeholder={item.placeholder}
                        value={option[item.name]}
                        onChange={(e) =>
                            handleChangeOption(item.name, e.target.value)
                        }
                    />
                </FormGroup>
            ))}
            <FormGroup className='mb-2'>
                <Label for='rom'>Color</Label>
                <Select />
            </FormGroup>
        </Form>
    );
};

export default OptionForm;
