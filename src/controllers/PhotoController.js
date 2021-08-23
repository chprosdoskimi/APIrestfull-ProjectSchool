import Photo from "../models/Photo";

import multer from "multer";
import multerconfig from "../config/multer";

const upload = multer(multerconfig).single("photo");

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;

        const photo = await Photo.create({
          originalname,
          filename,
          student_id,
        });

        return res.status(200).json(photo);
      } catch (e) {}
    });
  }
}

export default new PhotoController();
