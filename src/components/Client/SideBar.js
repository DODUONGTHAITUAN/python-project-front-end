import SideBarItem from './SideBarItem';

const list = [
    {
        id: Math.random(),
        title: 'hãng sản xuất',
        content: [
            {
                id: Math.random() * 100,
                item: 'Tất cả',
            },
            {
                id: Math.random() * 1000,
                item: 'xiaomi',
            },
            {
                id: Math.random() * 1000,
                item: 'realme',
            },
            {
                id: Math.random() * 1000,
                item: 'vsmart',
            },
            {
                id: Math.random(),
                item: 'OPPO',
            },
            {
                id: Math.random(),
                item: 'nokia',
            },
            {
                id: Math.random(),
                item: 'vivo',
            },
        ],
    },
];

const SideBar = () => {
    return (
        <div className="sidebar">
            {list.map((item, index) => (
                <SideBarItem item={item} key={index} />
            ))}
        </div>
    );
};

export default SideBar;
