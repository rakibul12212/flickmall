
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const MainLayout = () => {
    return (
        <div >
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;