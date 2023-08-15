"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navigation() {
  let path = usePathname();
  return (
    <nav>
        <ul>
            <li><Link href={'/'} >Home</Link></li>
            <li><Link href={'/blog'} >Blog</Link></li>
        </ul>
    </nav>
  )
}
