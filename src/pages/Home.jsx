import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <div>
            <header>
                <nav className="flex gap-6 bg-gray-900 text-white px-6 py-4 items-center justify-between">
                    <Link to="/" className=""><img className="avatar w-10 rounded-full" src="avatar.jpg" /></Link>
                    <ul className="flex items-center space-x-8 text-lg">
                        <li /><Link to="/" className="hover:text-blue-400">Home</Link>
                        <li /><Link to="/projects" className="hover:text-blue-400">Projects</Link>
                        <li /><Link to="/contact" className="hover:text-blue-400">Contact</Link>
                    </ul>
                </nav>
            </header>
        </div> 
    );
}

export function NotFound(){
    return (
        <div>
            <h1>404</h1>
            <p>Page Not Found</p>
        </div>
    )
}

export default function Home(){
    return (
        <div className="text-center py-16">
            <h3 className="text-5xl font-extrabold text-gray-900 mb-4">Hi, I'm Shivan Nischal</h3>
            <p className="max-w-xl mx-auto text-xl mb-8">This is my Portfolio Website</p>
            <Link 
                to="/projects" 
                className="inline-block bg-blue-600 text-white font-bold py-3 px-5 rounded-lg shadow-lg hover:bg-blue-700"
            >
                See My Work
            </Link>
        </div>
    );
}