import { useState } from "react";

const Guides = () => {
    const [listClicked, setListClicked] = useState([]);
    console.log(listClicked);
    const handeClicked = (index) => {
        const start = listClicked.indexOf(index);
        if (start !== -1) {
            listClicked.splice(start, 1);
            setListClicked([...listClicked]);
        } else {
            setListClicked([...listClicked, index]);
        }
    };
    return (
        <div className="guides">
            <div className="guides__content wrapper">
                <div className="guides__content__heading">
                    <span>Câu hỏi thường gặp</span>
                </div>
                <div className="guides__content__ques">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <div
                            className={`guides__content__ques__item ${
                                listClicked.includes(index) ? "active" : ""
                            }`}
                            key={index}
                        >
                            <div
                                className="guides__content__ques__item__top"
                                onClick={() => handeClicked(index)}
                            >
                                <div className="guides__content__ques__item__top__left">
                                    <i className="far fa-question-circle"></i>
                                    <span>
                                        Được tham gia "Thuê máy" bao nhiêu kỳ
                                        hạn?
                                    </span>
                                </div>
                                <div className="guides__content__ques__item__top__right">
                                    <i
                                        className={`fas fa-chevron-${
                                            listClicked.includes(index)
                                                ? "up"
                                                : "down"
                                        }`}
                                    ></i>
                                </div>
                            </div>
                            <div
                                hidden={!listClicked.includes(index)}
                                className="guides__content__ques__item__bottom"
                            >
                                <p>
                                    Đối với chương trình Thuê máy, Khách hàng sẽ
                                    có nhiều kỳ hạn để lựa chọn, bao gồm 6 - 9 -
                                    12 - 15 - 18 tháng. Sau khi kết thúc kỳ hạn
                                    thuê, Khách hàng sẽ có thời gian tối đa từ
                                    30-120 ngày để thực hiện lên đời máy mới.
                                    Chi tiết về lãi suất kỳ hạn thuê quý khách
                                    hàng có thể xem Tại đây.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Guides;
