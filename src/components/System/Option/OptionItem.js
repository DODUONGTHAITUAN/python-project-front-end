const OptionItem = (props) => {
    const { item } = props;
    return (
        <tr key={item}>
            <th scope='row'>{item}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
                <div className='op__actions d-flex algin-items-end gap-4'>
                    <i className='far fa-edit'></i>
                    <i className='far fa-trash-alt'></i>
                    <i className='far fa-eye'></i>
                </div>
            </td>
        </tr>
    );
};

export default OptionItem;
