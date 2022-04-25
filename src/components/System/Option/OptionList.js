import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import OptionItem from './OptionItem';

const _width = (w) => `${w}%`;

const OptionList = () => {
    return (
        <MDBTable striped>
            <MDBTableHead>
                <tr>
                    <th scope='col' style={{ width: _width(25) }}>
                        Product Name
                    </th>
                    <th scope='col' style={{ width: _width(20) }}>
                        Ram
                    </th>
                    <th scope='col' style={{ width: _width(20) }}>
                        Rom
                    </th>
                    <th scope='col' style={{ width: _width(20) }}>
                        Price
                    </th>
                    <th scope='col' style={{ width: _width(15) }}>
                        Handle
                    </th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {[1, 2, 3].map((item) => {
                    return <OptionItem key={item} item={item} />;
                })}
            </MDBTableBody>
        </MDBTable>
    );
};

export default OptionList;
