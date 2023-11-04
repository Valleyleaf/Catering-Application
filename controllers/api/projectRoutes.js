const router = require('express').Router();
const { Project } = require('../../models');
//This route doesn't really make much sense. We can refactor it, but honestly it would probably be better to just do it from
//scratch and have this as a refference
router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Above can be removed.
module.exports = router;
