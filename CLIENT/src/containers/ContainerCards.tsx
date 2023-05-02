import { infoCards } from '../utils/infoMedicConect'
import CardMedicConnect from '../components/CardMedicConnect'

const ContainerCards = (): JSX.Element => {
  return (
        <section className="row gap-5 justify-content-center">
            <CardMedicConnect cards={infoCards}/>
        </section>
  )
}

export default ContainerCards
