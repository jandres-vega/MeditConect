import {infoCards} from '../utils/dataEspcials';
//href="#/shopping
export const CardMedicConnect = ():string => {
    return `
        ${
            infoCards.map(card => `
                <div class="card" style="width: 18rem;">
                    <img src="${card.image}" class="card-img-top h-50" alt="${card.cardTitle}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">${card.cardTitle}</h5>
                        <a href="#${card.route}" class="btn btn-primary col-md-12">Agregar</a>
                    </div>
                </div>
            `).join('')
        }
    `
}