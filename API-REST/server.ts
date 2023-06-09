const {app} = require('./src/App');
const conexion = require('./src/libs/conexion');

async function conex() {
   try {
       await conexion()
   }catch (e) {
       console.error(e)
   }
}

conex()

app.listen(3005, () => {
    console.log(`listen on port ${3005}`)
})