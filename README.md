# Scripts back-end
## npm run dev
Corre la aplicacion en modo desarrollo 
en la url http://localhost:3005 abrirlo en el navegador.
## npm start
Ejecutar en modo produccion
# Scripts front-end
## npm run dev
Corre la aplicacion en modo desarrollo
en la url http://localhost:5173 abrirlo en el navegador.
## npm start
Ejecutar en modo produccion
# env
USER_DB = ""

NAME_DB = ""

PASSWORD = ""

PORT_SERVER = ""
# Rutas para back-end
### `POST`
 new doctor:

    http://localhost:3005/doctor + body { first_name, last_name, email, consultorio, specialty }

 new patient:

    http://localhost:3005/user + body { first_name, identification, last_name, age, cellphone }
 new appointment:

    http://localhost:3005/appointment + body {"doctor": "648a4df7c822cf92b22fe967","user": "648a4e8ec822cf92b22fe977","identification_patient": "1023256","specialty": ["dermatologia"] }
 
### `GET`

 all doctors:

    http://localhost:3005/doctor
 all patient: 

    http://localhost:3005/user
 doctor by id:
   
    http://localhost:3005/doctor/id
 appointments of doctor by id

    http://localhost:3005/appointment/id //el id  es dec doctor

![Captura de pantalla (2).png](..%2F..%2FPictures%2FScreenshots%2FCaptura%20de%20pantalla%20%282%29.png)![Captura de pantalla (3).png](..%2F..%2FPictures%2FScreenshots%2FCaptura%20de%20pantalla%20%283%29.png)![Captura de pantalla (4).png](..%2F..%2FPictures%2FScreenshots%2FCaptura%20de%20pantalla%20%284%29.png)