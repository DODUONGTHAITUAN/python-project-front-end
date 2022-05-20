import MarkdownIt from 'markdown-it';
import { useEffect, useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import { Button, Col, Row } from 'reactstrap';

import DetailProductInput from '../../components/System/DetailProduct/DetailProductInput';
import DetailProductSelect from '../../components/System/DetailProduct/DetailProductSelect';
import { keyMaps } from '../../utils/constant';

const inputs = [
    {
        id: 1,
        className: 'col-6 mb-3',
        key: 'sim_slot',
        placeholder: 'Enter no of sim slot...',
        label: 'Sim Slot',
    },
    {
        id: 2,
        className: 'col-6 mb-3',
        key: 'batteryText',
        placeholder: 'Enter battery parameter...',
        label: 'Battery Text',
    },
    {
        id: 3,
        className: 'col-6 mb-3',
        key: 'screenText',
        placeholder: 'Enter screen parameter...',
        label: 'Screen Text',
    },
];

const createSelects = (params) => {
    return [
        {
            id: 1,
            className: 'col-6 mb-3',
            key: keyMaps.OS,
            label: 'Operating system',
            setState: params.setSelectOs,
        },
        {
            id: 2,
            className: 'col-6 mb-3',
            key: keyMaps.BATTERY,
            label: 'Battery Type',
            setState: params.setSelectBattery,
        },
        {
            id: 4,
            className: 'col-6 mb-3',
            key: keyMaps.BRAND,
            label: 'Brand Type',
            setState: params.setSelectBrand,
        },
        {
            id: 5,
            className: 'col-6 mb-3',
            key: keyMaps.FEATURE,
            label: 'Feature Type',
            setState: params.setSelectFeature,
        },
    ];
};

const DetailProduct = () => {
    // Selected
    const [selectedOs, setSelectOs] = useState({});
    const [selectedBattery, setSelectBattery] = useState({});
    const [selectedBrand, setSelectBrand] = useState({});
    const [selectedFeature, setSelectFeature] = useState({});
    const [selects, setSelects] = useState([]);
    const [detail, setDetail] = useState(() => ({
        contentHTML: '',
        sim_slots: '',
        batteryText: '',
        screenText: '',
        contentMarkdown: '',
    }));

    useEffect(() => {
        const group = {
            setSelectBrand,
            setSelectBattery,
            setSelectOs,
            setSelectFeature,
        };
        setSelects(createSelects(group));
    }, []);

    const handleSetDetail = (key, value) => {
        console.log(key);
        setDetail((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const handleEditorChange = ({ html, text }) => {
        console.log('handleEditorChange', html, text);
    };
    return (
        <div className='dp'>
            <div
                className='dp__container container'
                style={{ marginBottom: 100 }}
            >
                <Row className='mt-4'>
                    <h2 className='text-center fw-bold text-uppercase'>
                        detail product
                    </h2>
                </Row>
                <Row className='mt-4'>
                    {inputs.map((item) => (
                        <DetailProductInput
                            item={item}
                            key={item.id}
                            handleSetDetail={handleSetDetail}
                            detail={detail}
                        />
                    ))}
                    {selects &&
                        selects.map((item) => (
                            <DetailProductSelect item={item} key={item.id} />
                        ))}
                </Row>
                <Row>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleEditorChange}
                    />
                </Row>
                <Row className='my-4'>
                    <Col className='col-12'>
                        <Button className='btn btn-primary'>
                            Save Changes
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default DetailProduct;
