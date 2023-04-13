import {expecialidades} from '../utils/dataEspcials';
import '../styles/FormDoctor.css';

export const FormDoctor = ():string => {
    return`
        <section class="container container-form-doctor">
            <form class="row g-3">
                <div class="col-md-6">
                    <label class="form-label">Ingrese el nombre</label>
                    <input type="text" class="form-control" placeholder="nombre">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Ingrese sus apellidos</label>
                    <input type="text" class="form-control" placeholder="apellido">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Ingrese un correo</label>
                    <input type="text" class="form-control" placeholder="email">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Ingrese el consultorio</label>
                    <input type="text" class="form-control" placeholder="consultorio">
                </div>
                <div class="col-md-6">
                    <select class="form-select">
                        ${
                            expecialidades.map(item => `
                                <option>${item}</option>
                            `)
                        }
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Ingresar datos</button>
            </form>
        </section>
    `
}