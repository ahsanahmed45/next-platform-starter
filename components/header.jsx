import Image from 'next/image';
import Link from 'next/link';
    <section className="flex flex-col gap-4">
                  
                    <img src="https://throughbrandneweyes.files.wordpress.com/2014/10/emirates_banner.jpg?w=672&h=255&crop=1" />
                </section>

const navItems = [
    { linkText: 'Home', href: '/' }
    
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
         
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex-grow justify-end hidden lg:flex lg:mr-1">
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    
                </Link>
            </div>
        </nav>
    );
}
