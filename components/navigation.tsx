import type React from "react"
import { HomeIcon, Speech, UserRound, BookText, CodeSquare, Mail } from 'lucide-react'

export interface NavItem {
  id: number
  title: string
  icon: React.ReactNode
  link: string
  tooltip: string
}

export const itemsNavbar: NavItem[] = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} strokeWidth={1} />,
    link: "/",
    tooltip: "Home",
  },
  {
    id: 2,
    title: "About",
    icon: <Speech size={25} strokeWidth={1} />,
    link: "/about",
    tooltip: "About",
  },
  {
    id: 3,
    title: "Trajectory",
    icon: <UserRound size={25} strokeWidth={1} />,
    link: "/trajectory",
    tooltip: "Trajectory"
  },
  {
    id: 4,
    title: "Services",
    icon: <BookText size={25} strokeWidth={1} />,
    link: "/services",
    tooltip: "Services",
  },
  {
    id: 5,
    title: "Portfolio",
    icon: <CodeSquare size={25} strokeWidth={1} />,
    link: "/portfolio",
    tooltip: "Portfolio",
  },
  {
    id: 6,
    title: "Contact",
    icon: <Mail size={25} strokeWidth={1} />,
    link: "/contact",
    tooltip: "Contact",
  },
]

