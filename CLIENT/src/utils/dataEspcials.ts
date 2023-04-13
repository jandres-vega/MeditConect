import doctor from '../assets/2.png';
import paciente from '../assets/1.png';
import citas from '../assets/3.png'
type CardMedicConnect = {
    cardTitle: string,
    image: string,
    route: string
}
export const expecialidades : string[] = [
    'Medicina general', 'Cardiologia', 'Medicina interna',
    'Dermatologia', 'Rehabilitacion fisica', 'Psicologia',
    'Odontologia', 'Radiologia'
];

export const infoCards: CardMedicConnect[] = [
    {cardTitle: 'Agregar doctor', image: doctor, route: '/formdoctor'},
    {cardTitle: 'Agregar paciente', image: paciente, route: '/formpatient'},
    {cardTitle: 'Agendar cita', image: citas, route: '/formappointment'}
]