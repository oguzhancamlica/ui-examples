import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (<>
  <Link href="/page-1">page-1</Link>
  <Link href="/page-2"> page-2</Link>
  <Link href="/page-3">Page-3</Link>
  <Link href="/page-4">page-4</Link>
  <Link href="/page-4.1">page-4.1</Link>
  </>
  )
}
