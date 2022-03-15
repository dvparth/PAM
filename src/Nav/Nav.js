import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="clearfix">
            <ul>
                <li>
                    <NavLink to="/summary" className={({ isActive }) => isActive ? "active" : ""}>
                        Summary
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/list" className={({ isActive }) => isActive ? "active" : ""}>
                        List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/detail" className={({ isActive }) => isActive ? "active" : ""}>
                        Detail
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/manage" className={({ isActive }) => isActive ? "active" : ""}>
                        Manage
                    </NavLink>
                </li>
            </ul>
        </nav>);
};