import express from 'express'
import config from './config'
import usuariosRoutes from './routes/usuarios.routes'
const app=express()
//settings
let port
app.set('port',config.port)

app.use(usuariosRoutes);
export default app