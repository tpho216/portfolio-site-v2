import {CustomRoute} from "../common/interfaces/CustomRoute";
import {About} from "../about/About";

export const routes : CustomRoute[] = [
    {
        path: '/about',
        component: About,
        key: 'about'
    },
]