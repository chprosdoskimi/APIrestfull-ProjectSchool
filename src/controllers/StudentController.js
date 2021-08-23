import Student from "../models/Student";
import Photo from "../models/Photo";

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll({
        attributes: [
          "id",
          "name",
          "surname",
          "email",
          "age",
          "weight",
          "height",
        ],
        order: [
          ["id", "DESC"], //ASC
          [Photo, "id", "DESC"],
        ],
        include: {
          model: Photo,
          attributes: ["id", "student_id", "filename", "url"],
        },
      });
      res.status(200).json(students);
    } catch (e) {
      return res.status(400).json(null);
    }
  }
  async store(req, res) {
    try {
      const newStudent = await Student.create(req.body);
      return res.status(201).json(newStudent);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing Id"],
        });
      }

      const student = await Student.findByPk(req.params.id, {
        attributes: [
          "id",
          "name",
          "surname",
          "email",
          "age",
          "weight",
          "height",
        ],
        order: [
          ["id", "DESC"], //ASC
          [Photo, "id", "DESC"],
        ],
        include: {
          model: Photo,
          attributes: ["id", "student_id", "filename", "url"],
        },
      });
      if (!student) {
        return res.status(400).json({
          errors: ["Student does not exists"],
        });
      }

      return res.status(200).json(student);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Id invalid"],
        });
      }
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        return res.status(400).json({
          errors: ["Student does not exists"],
        });
      }
      console.log(student);

      const newStudent = await student.update(req.body);
      return res.status(201).json(newStudent);
    } catch (e) {
      return res
        .status(401)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing Id"],
        });
      }
      const student = await Student.findByPk(req.params.id);
      if (!student) {
        return res.status(400).json({
          errors: ["Student does not exists"],
        });
      }
      await student.destroy();

      return res.status(200).json("Deleted Student");
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new StudentController();
