import React from 'react'
import Sidebar from '../components/Sidebar'
import './admin.css'
import Header from '../Components/Header'

const AdminDashboard = () => {
  return (
      <>
      <Header/>

      <div class="admin-main-ciontainer">
        <Sidebar/>

      <section class="main-content">
        <div class="main-content-info">
          <h1>Welcome to  Admin Page</h1>
        </div>
      </section>
    </div>
      </>
  )
}

export default AdminDashboard;