// Importa o modulo router do express
//Router será utilizado para definir rotas específicas da aplicação 
const router = require("express").Router();

//Importa a controller onde contem a lógica relacinada a professores 
const teacherController = require('../controllers/teacherController');

const controllerNumbers = require('../controllers/controllerNumbers');

//Rota POST, GET para '/teacher'
router.post('/teacher/',teacherController.postTeacher);
router.get('/teacher/',teacherController.getTeacher);

router.post('/number/', controllerNumbers.postNumbers);

module.exports = router