import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from "@env"; // Make sure @env is correctly set up

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadProfilePicture = async (file, username) => {
  try {
    const response = await fetch(file.uri); // Fetch URI to convert to Blob
    const blob = await response.blob(); // Convert URI to Blob
    const fileName = file.fileName || `profile_pic_${Date.now()}.jpeg`;
    const storageRef = ref(storage, `profile_pictures/${username}_${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, blob);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress.toFixed(2)}% done`);
        },
        (error) => {
          console.error("Error during upload: ", error);
          reject(error);
        },
        async () => {
          const url = await getDownloadURL(storageRef);
          resolve(url);
        }
      );
    });
  } catch (error) {
    console.error("Error uploading profile picture: ", error);
    throw error;
  }
};

