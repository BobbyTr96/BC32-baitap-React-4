import { CHON_GHE, HUY_GHE } from "../Constants/datveConstants";

// mảng rỗng dùng để chứa objec ghế khách đặt
const selectedChair = [];

const chairListOnSelectedReducer = (state = selectedChair, action) => {
  switch (action.type) {
    case CHON_GHE: {
      // bóc tách object chair từ action.payload
      const { chair } = action.payload;
      // sao chép lại mảng selectedChair
      let newSelectedChair = [...state];

      // duyệt mảng selectedChair : nếu index = -1 là ghế chưa tồn tại trong mảng thì ta thêm object vào mảng , còn nếu đã tồn tại mà ng dùng click thêm 1 lần nữa thì thực hiện xóa object ra khỏi mảng
      const index = state.findIndex((item) => item.soGhe === chair.soGhe);
      if (index === -1) {
        newSelectedChair.push(chair);
      } else {
        newSelectedChair.splice(index, 1);
      }

      return [...newSelectedChair];
    }

    case HUY_GHE: {
      // bóc tách object chair từ action.payload
      const { soGhe } = action.payload;
      // sao chép lại mảng selectedChair
      let newSelectedChair = [...state];

      // dùng hàm filter để hủy
      newSelectedChair = newSelectedChair.filter(
        (item) => item.soGhe !== soGhe
      );

      return newSelectedChair;
    }

    default:
      return state;
  }
};

export default chairListOnSelectedReducer;
