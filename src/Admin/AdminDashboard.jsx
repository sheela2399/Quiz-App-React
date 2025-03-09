import React from 'react'
import Sidebar from '../Components/Sidebar'
import './admin.css'
import Header from '../components/Header'

const AdminDashboard = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //   const toggleSidebar = () => {
  //       setIsSidebarOpen((prev) => !prev);
  //   };
  return (
      <>
      <Header/>

      <div class="admin-main-container">
        <Sidebar />

      <section className="main-content">
        <div className="main-content-info">
          <h1>Welcome to  Admin Page</h1>
        </div>
      </section>
    </div>
      </>
  )
}

export default AdminDashboard;