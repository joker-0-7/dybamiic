import Link from "next/link"

function Navbar() {

  return (
    <div>
    <Link href='/'>
    <h1>Home</h1>
    </Link>
    <h2>Zones in Nigeria</h2>
    <nav>

        <ul>
            <Link href='/sw'>
            <li>south west </li>
            </Link>

            <Link href='/se'>
            <li>south east</li>
            </Link>

            <Link href='/ss'>
            <li>south south</li>
            </Link>

            <Link href='/nc'>
            <li>north central</li>
            </Link>

            <Link href='/ne'>
            <li>north east</li>
            </Link>

            <Link href='/nw'>
            <li>north west</li>
            </Link>

        </ul>
    </nav>
    </div>
  )
}

export default Navbar
