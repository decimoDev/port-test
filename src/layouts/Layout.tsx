import React, { FunctionComponent, ReactNode } from 'react'
import { Archivo } from '@next/font/google'

const archivo = Archivo({
    subsets : ['latin']
})

const Layout : FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <>
        <main id={archivo.className}>
            {children}
        </main>
    </>
  )
}

export default Layout

interface LayoutProps {
    children : ReactNode
}