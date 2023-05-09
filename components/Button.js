import Link from 'next/link'

const Button = ({ name, link }) => {
    console.log('hello')
    return (
        
            <Link href={link}>
                <div className="button">
                  {name}
                </div>
            </Link>
        
    )
}

export default Button;