import doctor from '../assets/2.png'
import paciente from '../assets/1.png'
import citas from '../assets/3.png'

interface cardInfo {
  id: number
  cardTitle: string
  image: string
  route: string
}

export const expecialidades: string[] = [
  'Medicina general', 'Cardiologia', 'Medicina interna',
  'Dermatologia', 'Rehabilitacion fisica', 'Psicologia',
  'Odontologia', 'Radiologia'
]
export const infoCards: cardInfo[] = [
  { id: 1, cardTitle: 'Agregar doctor', image: doctor, route: '/formdoctor' },
  { id: 2, cardTitle: 'Agregar paciente', image: paciente, route: '/formpatient' },
  { id: 3, cardTitle: 'Agendar cita', image: citas, route: '/formappointment' }
]
