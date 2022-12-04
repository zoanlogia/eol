import './SidebarDefault.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from 'react-bootstrap-sidebar-menu';

const SidebarDefault = () => {
  return (
    <Sidebar>
      <Sidebar.Collapse>
        <Sidebar.Header>
          <Sidebar.Brand>
            <img src="../../assets/img/logoEOL.png" alt="" />
          </Sidebar.Brand>
          <Sidebar.Toggle />
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Nav>
            <Sidebar.Nav.Link>
              <Sidebar.Nav.Icon>{/* menu item icon */}</Sidebar.Nav.Icon>
              <Sidebar.Nav.Title>{/* menu item title */}</Sidebar.Nav.Title>
            </Sidebar.Nav.Link>
            <Sidebar.Sub>
              <Sidebar.Sub.Toggle>
                <Sidebar.Nav.Icon />
                <Sidebar.Nav.Title>{/* sub menu item title */}</Sidebar.Nav.Title>
              </Sidebar.Sub.Toggle>
              <Sidebar.Sub.Collapse>
                <Sidebar.Nav>
                  <Sidebar.Nav.Link>
                    <Sidebar.Nav.Icon>{/* sum menu item icon */}</Sidebar.Nav.Icon>
                    <Sidebar.Nav.Title>{/* sub menu item title */}</Sidebar.Nav.Title>
                  </Sidebar.Nav.Link>
                </Sidebar.Nav>
              </Sidebar.Sub.Collapse>
            </Sidebar.Sub>
          </Sidebar.Nav>
        </Sidebar.Body>
      </Sidebar.Collapse>
    </Sidebar>
  )
}

export default SidebarDefault
