import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { chonGhe } from "../actions/datveActions";

const RowOfSeats = ({ chair, chairOnSelected }) => {
  // hàm action redux
  const dispatch = useDispatch();

  // hàm thay đổi state mảng ghế được chọn trên redux store
  const handleSelect = (chair) => {
    dispatch(chonGhe(chair));
    console.log(chair);
  };

  return (
    <>
      {chair.map((item, index) => {
        if (index === 0) {
          return (
            <div
              key={index}
              className="d-flex text-white mt-4 align-items-center justify-content-center"
              style={{ fontSize: 25 }}
            >
              {item.danhSachGhe.map((numChair, index0) => {
                return (
                  <span key={index0} className="rowNumber text-center">
                    {numChair.soGhe}
                  </span>
                );
              })}
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="d-flex text-white mt-4 align-items-center justify-content-center"
              style={{ fontSize: 25 }}
            >
              {/* dãy ghế theo kí tự a-z */}
              <span>{item.hang}</span>

              {/* list số ghế */}

              {item.danhSachGhe.map((chair, index2) => {
                // biến cờ hiệu thay đổi ô màu ghế khi ghế được chọn sẽ chuyển sang xanh
                let cssGheDuocchon = false;
                const indexGheDuocChon = chairOnSelected.findIndex(
                  (gheDuocChon) => gheDuocChon.soGhe === chair.soGhe
                );
                if (indexGheDuocChon !== -1) {
                  cssGheDuocchon = true;
                }
                // end cờ hiệu thay đổi màu ghế
                return (
                  <button
                    key={index2}
                    disabled={chair.daDat}
                    className={cn(
                      "ghe",
                      { gheDuocChon: chair.daDat },
                      { gheDangChon: cssGheDuocchon }
                    )}
                    onClick={() => handleSelect(chair)}
                  >
                    {chair.soGhe}
                  </button>
                );
              })}
            </div>
          );
        }
      })}
    </>
  );
};

export default RowOfSeats;
