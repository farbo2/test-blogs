import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">

            <h1>لوگوی سایت</h1>

            <div className="Links">
            <Link to="/"> خانه </Link>
            <Link to="/Create">افزودن مطلب</Link>
            
            </div>
            
             

        </nav>
    );
}
 
export default Navbar;