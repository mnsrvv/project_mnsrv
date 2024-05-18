const router = require("express").Router();

// компоненты
const AdminPage = require("../../components/pages/AdminPage");
const TeacherChange = require("../../components/pages/TeacherChange");

// модели
const { Teacher, Faculty, Admin } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.findAll({ include: Faculty });
    const faculties = await Faculty.findAll();

    const html = res.renderComponent(AdminPage, { teachers, faculties });

    res.send(html);
  } catch (error) {
    res.json({ message: "error", error });
  }
});

router.get("/update/:id", async (req, res) => {
  const id = +req.params.id;
  try {
    const teacher = await Teacher.findOne({ where: id });
    const faculties = await Faculty.findAll();

    const html = res.renderComponent(TeacherChange, {
      teacher,
      faculties,
    });

    res.send(html);
  } catch (error) {
    res.json({ message: "error", error });
  }
});

module.exports = router;
