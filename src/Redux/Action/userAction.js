import { app } from "../../firebaseconfig";
import {
  getDatabase,
  set,
  ref,
  onValue,
  remove,
  update,
} from "firebase/database";

const db = getDatabase(app);

export const Add_User = (user) => {
  return async (dispatch) => {
    try {
      let id = Date.now();
      set(ref(db, "users/" + id), {
        name: user.name,
        phone: user.phone,
      });
      dispatch({
        type: "add",
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const View_User = () => {
  return async (dispatch) => {
    try {
      let users = ref(db, "users/");
      console.log(users);
      onValue(users, (record) => {
        const data = record.val();
        dispatch({
          type: "view",
          payload: data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Delete_User = (usrid) => {
  return async (dispatch) => {
    try {
      let users = ref(db, "users/" + usrid);
      await remove(users);
    } catch (error) {
      console.log(error);
    }
  };
};

export const Edit_User = (user) => {
  console.log(user);
  return async (dispatch) => {
    try {
      const userrow = ref(db, "users/" + user.id);
      await update(userrow, {
        name: user.name,
        phone: user.phone,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
