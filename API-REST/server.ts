import app from './src/App';
import connect from "./src/libs/conexion";
import {config} from "./src/config";

connect()
app.listen(config.port_server, () => {
    console.log(`listen on port ${config.port_server}`)
})
