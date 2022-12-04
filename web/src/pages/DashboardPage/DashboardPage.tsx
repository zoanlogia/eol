import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, routes } from '@redwoodjs/router'
import NavbarDefault from 'src/components/Navbar/Navbar'
import SidebarDefault from 'src/components/SidebarDefault/SidebarDefault';

const DashboardPage = () => {
  return (
    <>
    <NavbarDefault />
    <SidebarDefault />
    </>
  )
}

export default DashboardPage
