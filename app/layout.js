"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { Button, Card, CardBody, Container, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { Providers } from "./providers";
import { useContext, useState } from 'react';
import { ActiveTabContext, useActiveTab } from '@/context/ActiveTab';
import useActiveNavBar from '@/utils/useActiveNavbar';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  // const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const [activeTab, setActiveNavItem] = useActiveNavBar();

  console.log(activeTab)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Container>

            <nav className='sticky top-0 z-1'>
              <Card className='shadow-lg rounded-lg mt-10'>
                <CardBody className='p-3'>
                  <Tooltip label='Home' className='text-xs rounded-md'>
                  <Link href="/">
                    <Button isActive={activeTab === "home"} onClick={()=>setActiveNavItem("home")}><i class="text-xl text-gray-500 fi fi-rr-home"></i></Button>
                  </Link>
                  </Tooltip>
                  <Tooltip label='Experiences' className='text-xs rounded-md'>
                  <Link href="/experiences">
                    <Button isActive={activeTab === "experiences"} onClick={()=>setActiveNavItem("experiences")}><i class="text-xl text-gray-500 fi fi-rr-briefcase"></i></Button>
                  </Link>
                  </Tooltip>
                  <Tooltip label='Projects' className='text-xs rounded-md'>
                  <Link href="/projects">
                    <Button isActive={activeTab === "projects"} onClick={()=>setActiveNavItem("projects")}><i class="text-xl text-gray-500 fi fi-rr-folder-open"></i></Button>
                  </Link>
                  </Tooltip>
                  <Tooltip label='Contact' className='text-xs rounded-md'>
                  <Link href="/contact">
                    <Button isActive={activeTab === "contact"} onClick={()=>setActiveNavItem("contact")}><i class="text-xl text-gray-500 fi fi-rr-comment-alt-dots"></i></Button>
                  </Link>
                  </Tooltip>
                  
                </CardBody>
              </Card>
            </nav>

            <Card className='shadow-lg rounded-lg mt-5 mb-10 p-5'>
              {children}
            </Card>
            
          </Container>
        </Providers>
      </body>
    </html>
  )
}
