export interface NavLink {
    label: string,
    url: string,
    value?: number,
    submenu?: Array<NavLink>
}