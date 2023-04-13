import '../styles/FormPersons.css';
export const FormPersons = ():string => {
    return `
        <section class="container container-form-persons">
            <form class="row g-3">
                <div class="col-md-6">
                    <label class="form-label">Ingrese el nombre</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="nombre">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Ingrese sus apellidos</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="apellido">
                </div>
                <div class="col-md-4">
                    <label class="form-label">ingrese su cedula</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="cedula">
                </div>
                <div class="col-md-4">
                    <label class="form-label">Ingrese su edad</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="edad">
                </div>
                <div class="col-md-4">
                    <label class="form-label">Ingrese su numero de telefono</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="telefono">
                </div>
                <button class="btn btn-primary col-md-12">Ingresar datos</button>
            </form>
        </section>
    `
}