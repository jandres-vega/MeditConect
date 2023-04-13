import { Header} from './templates/Header';
import {router} from './routes';
const header = document.querySelector('#app');

header.innerHTML = Header();
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
