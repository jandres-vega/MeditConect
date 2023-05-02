import '../styles/FormPatient.css'

const FormPatient = (): JSX.Element => {
  return (
        <section className="container container-form-persons">
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Ingrese el nombre</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="nombre"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Ingrese sus apellidos</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="apellido"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">ingrese su cedula</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="cedula"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Ingrese su edad</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="edad"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Ingrese su numero de telefono</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="telefono"/>
                </div>
                <button className="btn btn-primary col-md-12">Ingresar datos</button>
            </form>
        </section>
  )
}

export default FormPatient
