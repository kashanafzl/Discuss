

import React from 'react'
import Rightsidebar from "./pages/Rightsidebar";
import Dashboard from "./pages/Dashboard";
export default function main() {
  return (
    <div>
      
      <Route path="/" element={<Dashboard />} />
          <Route path="/Rightsidebar" element={<Rightsidebar />} />
      

    </div>
  )
}
