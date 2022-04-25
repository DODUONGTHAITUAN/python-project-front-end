import { useEffect, useState } from 'react';
import { FormGroup, Label, Col } from 'reactstrap';
import Select from 'react-select';

import allcodesService from '../../../services/allcodesService';
import CommonUtils from '../../../utils/CommonUtils';

const DetailProductSelect = (props) => {
    const [options, setOptions] = useState([]);
    const { item } = props;

    const handleGetRoleByKeyMap = async (type, setOptions) => {
        try {
            const data = await allcodesService.getAllcodeByType(type);
            if (data.data?.code === 0) {
                const options = CommonUtils.formatAllcodesToSelectOption(
                    data.data.allcodes
                );
                setOptions(options);
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        handleGetRoleByKeyMap(item.key, setOptions);
    }, []);

    return (
        <Col className={item.className}>
            <FormGroup>
                <Label for={item.key}>{item.label}</Label>
                <Select
                    options={options}
                    onChange={item.setState}
                    // value={options?.length > 0 ? options[0] : {}}
                />
            </FormGroup>
        </Col>
    );
};

export default DetailProductSelect;
