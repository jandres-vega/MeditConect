import {getHash} from '../utils/getHash';
import {resolveRoutes} from '../utils/resolverRoutes';
import {ContainerCards} from '../templates/ContainerCards';
import {FormDoctor} from '../templates/FormDoctor';
import {FormPersons} from '../templates/FormPersons';
import {FormAppoiment} from '../templates/FormAppoiment';
import {NotFound} from '../pages/NotFound';

const routes = {
    '/': ContainerCards,
    '/formdoctor': FormDoctor,
    '/formpatient': FormPersons,
    '/formappointment': FormAppoiment
}

export const router = () => {
    const main = document.querySelector('#main');
    let hash = getHash();
    let route = resolveRoutes(hash);

    let render = routes[route] ? routes[route]: NotFound
    console.log(hash)

    if (route === '/'){
        main.innerHTML = render();
    }else if(route === '/formDoctor'){
        main.innerHTML = render();
    }else {
        main.innerHTML = render();
    }
}