import { set, ref } from "firebase/database";
import { db } from "../utils/firebase";
import { v4 as uuidv4 } from "uuid";

function addform(formobj) {
  const pid = uuidv4();
  return new Promise(async (resolve, reject) => {
    await set(ref(db, `login/${pid}`), formobj)
      .then(() => {
        resolve("message_added");
      })
      .catch((err) => {
        reject(err.code);
      });
  });
}

export default addform;
