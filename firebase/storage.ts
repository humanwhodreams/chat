import app from "./config";
import { getStorage } from "firebase/storage";

export const storage = getStorage(app);
