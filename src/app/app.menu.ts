import { MenuItem } from "../fw/services/menu.service";

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'glyphicon-flag',
        route: 'authenticated/countries',
        submenu: null
    },
    {
        text: 'Settings',
        icon: 'glyphicon-wrench',
        route: 'authenticated/settings',
        submenu: null
    }
];

