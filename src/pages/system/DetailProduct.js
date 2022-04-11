import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';

const DetailProduct = () => {
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const handleEditorChange = ({ html, text }) => {
        console.log('handleEditorChange', html, text);
    };
    return (
        <div className='dp'>
            <div className='dp__container container'>
                <div className='row mt-4 mb-4'>
                    <div className='col-6'>
                        <FormGroup>
                            <Label for='sim_slot'>Sim Slot</Label>
                            <Input
                                type='text'
                                id='sim_slot'
                                placeholder='with a placeholder'
                            />
                        </FormGroup>
                    </div>
                    <div className='col-6'>
                        <FormGroup>
                            <Label for='exampleEmail'>Operating System</Label>
                            <Select />
                        </FormGroup>
                    </div>
                </div>
                <div className='row mt-4 mb-4'>
                    <div className='col-6'>
                        <FormGroup>
                            <Label for='battery_text'>Battery</Label>
                            <Input
                                type='text'
                                id='battery_text'
                                placeholder='with a placeholder'
                            />
                        </FormGroup>
                    </div>
                    <div className='col-6'>
                        <FormGroup>
                            <Label for='battery_id'>Battery Type</Label>
                            <Select />
                        </FormGroup>
                    </div>
                </div>
                <div className='row mt-4 mb-4'>
                    <div className='col-6'>
                        <FormGroup>
                            <Label for='screen_text'>Screen</Label>
                            <Input
                                type='text'
                                id='screen_text'
                                placeholder='with a placeholder'
                            />
                        </FormGroup>
                    </div>
                    <div className='col-6'>
                        <FormGroup>
                            <Label for='screen_id'>Screen Type</Label>
                            <Select />
                        </FormGroup>
                    </div>
                </div>
                <div className='row mt-4 mb-4'>
                    <div className='col-6'>
                        <FormGroup>
                            <Label for='brand_id'>Brand</Label>
                            <Select />
                        </FormGroup>
                    </div>
                    <div className='col-6'>
                        <FormGroup>
                            <Label for='feature_id'>Feature</Label>
                            <Select />
                        </FormGroup>
                    </div>
                </div>
                <div className='row '>
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={handleEditorChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
