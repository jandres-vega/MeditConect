import {CardMedicConnect} from './CardsMeditConect';
export const ContainerCards = ():string => {
    return `
        <section class="row gap-5 justify-content-center">
            ${CardMedicConnect()}       
        </section>
    `
}