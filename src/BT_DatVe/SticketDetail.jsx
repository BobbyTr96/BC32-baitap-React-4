import React from "react";
import { useDispatch } from "react-redux";
import { huyGhe } from "../actions/datveActions";


const SticketDetail = ({ chairOnSelected }) => {
  
  //format
  const formatPrice = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });

  const dispatch = useDispatch();

  const handleDeleted = (soGhe) => {
    dispatch(huyGhe(soGhe));
  };

  return (
    <div>
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        <span className="text-white mx-2">Ghế được chọn</span> <br />
        <button className="gheDangChon"></button>
        <span className="text-white mx-2">Ghế đang chọn</span>
        <br />
        <button className="ghe " style={{ marginLeft: 0 }}></button>
        <span className="text-white mx-2">Ghế còn trống</span>
        <br />
      </div>

      <div className="mt-5 ">
        <table className="table table-bordered text-center">
          <thead>
            <tr className="text-white" style={{ fontSize: "25px" }}>
              <th>Số ghế</th>
              <th>Giá vé</th>
              <th> Hủy </th>
            </tr>
          </thead>
          <tbody className="text-white" style={{ verticalAlign: "middle" }}>
            {chairOnSelected.map((item) => (
              <tr key={item.soGhe}>
                <td>{item.soGhe}</td>
                <td>{formatPrice.format(item.gia)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleted(item.soGhe)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>TỔNG TIỀN</td>
              <td>
                {formatPrice.format(
                  chairOnSelected.reduce((total, item) => {
                    return (total += item.gia);
                  }, 0)
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SticketDetail;
