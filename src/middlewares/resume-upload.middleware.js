import multer from "multer";

let storageConfig = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'public/resumes/')
    },
    filename:(req, file, cb)=>{
        cb(null, Date.now()+'-'+file.originalname);
    }
});

export const uploadResume = multer({storage: storageConfig});