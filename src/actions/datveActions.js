import { CHON_GHE, HUY_GHE } from "../Constants/datveConstants";

export const chonGhe = (chair) => {
  return {
    type: CHON_GHE,
    payload: { chair },
  };
};

export const huyGhe = (soGhe) => {
  return {
    type: HUY_GHE,
    payload: { soGhe },
  };
};
