import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/playground">0. Dashboard</Link>
                </li>
                <li>
                    <Link to="/playground/faq-list">1. Faq list</Link>
                </li>
            </ul>
        </nav>
    )
}