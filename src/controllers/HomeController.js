class HomeController {
  index(req, res) {
    res
      .status(200)
      .send("<h3>Hi everyone, this is a School project API rest</h1>");
  }
}

export default new HomeController();
