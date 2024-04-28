const { Router, query } = require('express') // 
const Curso = require('../models/Curso')

const { auth } = require('../middleware/auth')
const CursoController = require('../controllers/CursoController')

const cursoRoutes = new Router()

cursoRoutes.post('/', auth, CursoController.CadastrarCurso)
cursoRoutes.get('/', auth, CursoController.ListarCursos)
cursoRoutes.get('/', auth, CursoController.listarUmCurso)
cursoRoutes.delete('/', auth, CursoController.deletarCurso)

module.exports = cursoRoutes