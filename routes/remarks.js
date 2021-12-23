const express = require("express");
const router = express.Router();
const remarksCtrl = require("../controllers/remarks");
const auth = require("../middlewares/auth");

router.get("/all/remarks", remarksCtrl.selectAllRemarks);
router.get("/posts/:id_posts/remarks", remarksCtrl.selectAllRemarksOnOnePost);
router.get("/posts/:id_posts/remarks/:id_remarks", remarksCtrl.selectOneRemark);
router.post(
  "/users/:id_users/posts/:id_posts/remarks",
  remarksCtrl.insertOneRemark
);
router.put(
  "/users/:id_users/posts/:id_posts/remarks/:id_remarks",
  remarksCtrl.modifyOneRemark
);
router.delete(
  "/users/:id_users/posts/:id_posts/remarks/:id_remarks",
  remarksCtrl.deleteOneRemark
);

module.exports = router;
