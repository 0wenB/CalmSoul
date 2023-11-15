const router = require("express").Router();
const Controller = require("../controllers/controller");
const authentication = require("../middleware/authentication");
const authorizationUser = require("../middleware/authorizationUser");

router.post("/login", Controller.login);
router.post("/register", Controller.addUser);

router.use(authentication);

router.get("/", Controller.showVideos);
router.post("/add", Controller.addVideo);
router.put("/:videoId", Controller.editVideo);
router.delete("/:videoId", Controller.deleteVideo);

module.exports = router;
