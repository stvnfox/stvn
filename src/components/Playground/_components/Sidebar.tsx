import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/playground">Dashboard</Link>
                </li>
                <li>
                    <Link to="/playground/1">Link 1</Link>
                </li>
                <li>
                    <Link to="/playground/2">Link 2</Link>
                </li>
            </ul>
        </nav>
    )
}