import './Footer.css'
export default function Footer() {
    return (
        <footer>
                <div className="half-ellipse"></div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Doctor</a></li>
                        <li><a href="#">Pharmacy</a></li>
                        <li><a href="#">Lab Tests</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </nav>
                <span>&copy; 2023 Hello Doctor.</span>
        </footer>
    )
}
