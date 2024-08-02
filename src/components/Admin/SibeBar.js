import 'react-pro-sidebar/dist/css/styles.css'
import {
     ProSidebar,
     Menu,
     MenuItem,
     SubMenu,
     SidebarHeader,
     SidebarFooter,
     SidebarContent,
} from 'react-pro-sidebar';
import { FaGem, FaGithub } from 'react-icons/fa';
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import sidebarBg from '../../assets/bg2.jpg'
import "./Admin.scss"
const SibeBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
     return (
          <>
               <ProSidebar
                    image={sidebarBg}
                    collapsed={collapsed}
                    toggled={toggled}
                    breakPoint="md"
                    onToggle={handleToggleSidebar}
               >
                    <SidebarHeader>
                         <div
                              style={{
                                   padding: '24px',
                                   textTransform: 'uppercase',
                                   fontWeight: 'bold',
                                   fontSize: 14,
                                   letterSpacing: '1px',
                                   overflow: 'hidden',
                                   textOverflow: 'ellipsis',
                                   whiteSpace: 'nowrap',
                              }}
                         >
                              <DiReact size={"3em"} color={"00bfff"} />
                              <span>React admin</span>
                         </div>
                    </SidebarHeader>

                    <SidebarContent>
                         <Menu iconShape="circle">
                              <MenuItem
                                   icon={<MdDashboard />}
                              // suffix={<span className="badge red">New</span>}
                              >
                                   DashBoard
                              </MenuItem>
                         </Menu>
                         <Menu iconShape="circle">
                              <SubMenu

                                   title={"Feature"}
                                   icon={<FaGem />}
                              >
                                   <MenuItem>1. Manager Users    </MenuItem>
                                   <MenuItem>2. Manager Quiz</MenuItem>
                                   <MenuItem>3. Manager Question</MenuItem>
                              </SubMenu>
                         </Menu>
                    </SidebarContent>

                    <SidebarFooter style={{ textAlign: 'center' }}>
                         <div
                              className="sidebar-btn-wrapper"
                              style={{
                                   padding: '20px 24px',
                              }}
                         >
                              <a
                                   href="https://github.com/azouaoui-med/react-pro-sidebar"
                                   target="_blank"
                                   className="sidebar-btn"
                                   rel="noopener noreferrer"
                              >
                                   <FaGithub />
                                   <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                        React Admin
                                   </span>
                              </a>
                         </div>
                    </SidebarFooter>
               </ProSidebar>
          </>
     )
}
export default SibeBar;