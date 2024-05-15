import { Header } from "@/components/header"
import React from "react"

interface IDashBoard {
  children: React.ReactNode
}

const DashboardLayout = ({
  children,
}: IDashBoard) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-4">
        {children}
      </main>
    </>
  )
}

export default DashboardLayout