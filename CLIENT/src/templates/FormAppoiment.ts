import {expecialidades} from '../utils/dataEspcials';
import '../styles/FormAppoint.css';
export const FormAppoiment = ():string => {
    return `
        <section class="container container-form-appoint">
            <form class="row g-3">
                <div>
                    <label class="form-label">Ingrese el documento del pasiente</label>
                    <input type="text" class="form-control" placeholder="documento">
                </div>
                <select class="form-select">
                    ${
                        expecialidades.map(item => `
                            <option>${item}</option>
                        `)
                    }
                </select>
            </form>
        </section>
    `
}