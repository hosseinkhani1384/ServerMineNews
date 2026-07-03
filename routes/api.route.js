const { Router } = require("express");
const apiRouter = Router();
const {
  Login,
  Register,
  checkAuth,
  logout,
} = require("../controllers/auth.controller");

apiRouter.post("/auth/register", Register);
apiRouter.post("/auth/login", Login);
apiRouter.get("/auth/check", checkAuth);
apiRouter.post("/auth/logout", logout);

module.exports = { apiRouter };
