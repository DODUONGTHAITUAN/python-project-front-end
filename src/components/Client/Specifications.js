import { useState } from 'react';

const Specifications = () => {
    const [isShowSpecifications, setShowSpecifications] = useState(false);

    return (
        <div className="s-main">
            <div className="s-main__left">
                <div className="s-main__left__heading">
                    <span> Đặc điểm nổi bật của OPPO A94 8GB-128G</span>
                </div>
            </div>
            <div className="s-main__right">
                <div className="s-main__right__heading">
                    <span>Thông số kỹ thuật</span>
                </div>
                <div className="s-main__right__table">
                    <table className="table table-striped table-bordered">
                        <colgroup>
                            <col style={{ width: '30%' }} />
                            <col style={{ width: '70%' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>Màn hình</td>
                                <td>
                                    6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels
                                </td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>48.0 MP + 8.0 MP + 2.0 MP + 2.0 MP</td>
                            </tr>
                            <tr>
                                <td>Camera Selfie</td>
                                <td>32.0 MP</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>8 GB</td>
                            </tr>
                            <tr>
                                <td>Bộ nhớ trong</td>
                                <td>128GB</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td>Helio P95</td>
                            </tr>
                            {isShowSpecifications && (
                                <>
                                    <tr>
                                        <td>GPU</td>
                                        <td>PowerVR GM9446</td>
                                    </tr>
                                    <tr>
                                        <td>Thẻ sim</td>
                                        <td>2 - 2 Nano SIM</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>Android 11</td>
                                    </tr>
                                    <tr>
                                        <td>Xuất xứ </td>
                                        <td>Trung Quốc</td>
                                    </tr>
                                    <tr>
                                        <td>Thời gian ra mắt</td>
                                        <td>03/2021</td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="s-main__right__more">
                    <span
                        onClick={() =>
                            setShowSpecifications(!isShowSpecifications)
                        }
                    >
                        {!isShowSpecifications ? 'Xem thêm' : 'Ẩn bớt'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Specifications;
