import SpecificationsItem from './SpecificationsItem';

const trs = [
    {
        id: 1,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
    {
        id: 2,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
    {
        id: 3,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
    {
        id: 4,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
    {
        id: 5,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
    {
        id: 6,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
];

const trs_more = [
    {
        id: 1,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
    {
        id: 2,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
    {
        id: 3,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
    {
        id: 4,
        label: 'Màn hình',
        value: '6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels',
    },
];

const SpecificationsTable = ({ isShowSpecifications }) => {
    return (
        <table className='table table-striped table-bordered'>
            <colgroup>
                <col style={{ width: '30%' }} />
                <col style={{ width: '70%' }} />
            </colgroup>
            <tbody>
                {trs.map((item) => (
                    <SpecificationsItem item={item} key={item.id} />
                ))}
                {isShowSpecifications &&
                    trs_more.map((item) => (
                        <SpecificationsItem item={item} key={item.id} />
                    ))}
            </tbody>
        </table>
    );
};

export default SpecificationsTable;
