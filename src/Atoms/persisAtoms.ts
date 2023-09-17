import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "dongaST-hicardi-user-info",
  storage: sessionStorage,
});

export default persistAtom;
