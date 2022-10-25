import { Navigate } from 'react-router-dom';
import { User } from '../models/user.model';


export const Landing = () => <h2>Landing Page (Public)</h2>

// Esta es una forma sensilla de validar una ruta 
// export const Home = (user: User) => {
//     if (Object.keys(user).length == 0) {
//         return (<Navigate to='/landing' />);
//     }
//     return (<h2>Home Page (Private)</h2>);
// }

export const Home = () => {
    return (<h2>Home Page (Private)</h2>);
}

export const Dashboard = () => <h2>Dashboard Page (Private)</h2>

export const Analytics = () => <h2>Analytics Page (Private, permission: 'analize')</h2>

export const Admin = () => <h2>Admin Page (Private, permission: 'admin')</h2>