import React from "react";
//import css
import "./home.css";
import SticketDetail from "./SticketDetail";
import { useSelector } from "react-redux";
import RowOfSeats from "./RowOfSeats";
const BookingTicket = () => {
  const chair = useSelector((state) => {
    return state.chair;
  });

  const chairOnSelected = useSelector((state) => {
    return state.chairListOnSelectedReducer;
  });

  return (
    <div className="home-bg ">
      <div className="overLay">
        <div className="container">
          <div className="row">
            {/* hàng ghế */}
            <div className="col-sm-8">
              <h1 className=" mt-4 text-center" style={{ color: "orange" }}>
                ĐẶT VÉ XEM PHIM CYBERLEARN.VN
              </h1>
              <h3 className="text-center text-white">Màn Hình</h3>
              <div className="d-flex align-items-center flex-column">
                <div className="screen"></div>
                <RowOfSeats chair={chair} chairOnSelected={chairOnSelected} />
              </div>
            </div>

            {/* chi tiết vé ghế */}
            <div className="col-sm-4">
              <div style={{ fontSize: "35px" }} className="mt-4 text-white">
                DANH SÁCH GHẾ BẠN CHỌN
              </div>
              <SticketDetail chairOnSelected={chairOnSelected} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTicket;
