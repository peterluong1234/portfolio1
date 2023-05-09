import Link from "next/link";

const NavItem = ({ name, href }) => {
    return (
        <Link href={href}>
            {name}
        </Link>
    )
}

export default NavItem;