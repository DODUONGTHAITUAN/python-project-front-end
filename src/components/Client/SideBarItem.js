const SideBarItem = ({ item }) => {
    return (
        <div className="si">
            <div className="si__title">
                <span>{item.title}</span>
            </div>
            <div className="si__list">
                {item?.content &&
                    item.content.map((i, index) => {
                        return (
                            <label
                                htmlFor={i.item}
                                className="si__list__item"
                                key={index}
                            >
                                <input type="checkbox" id={i.item} />
                                <span>{i.item}</span>
                            </label>
                        );
                    })}
            </div>
        </div>
    );
};

export default SideBarItem;
