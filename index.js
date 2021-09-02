const express = require('express')
const path = require('path')
const router = express.Router()

const app = express()

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.use(express.static( path.join(__dirname,'public')))

router.get('/',(req,res) => {
    res.render('index',{ name:'Nicolle Puma'})
})

router.get('*',(req,res) => {
    res.status(400).json({
        Message:'Pagina no encontrada'
    })
})

app.use('/',router)

const PORT = 3000

app.listen(PORT,()=>{
    console.log('Servidor levantado http://localhost:3000/')
})