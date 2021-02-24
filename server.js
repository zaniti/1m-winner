const express = require('express')
const app= express()
require('./config/mongodb')


const participationRoute = require('./routes/partcipant')
const adminRoute = require('./routes/admin')

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/participant',participationRoute)
app.use('/admin',adminRoute)


app.listen(5000,()=>console.log('server is running on port 5000'))
module.exports = app