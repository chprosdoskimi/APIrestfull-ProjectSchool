import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);

      const { id, nome, email } = newUser;

      return res.status(201).json({ id, nome, email });
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.status(200).json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, name, email } = user;

      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ errors: ['User does not exists'] });
      }
      const newData = await user.update(req.body);

      return res.status(201).json(newData);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ errors: ['User does not exists'] });
      }
      await user.destroy();

      return res.json('User deleted');
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
