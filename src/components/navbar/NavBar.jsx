import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbarContainer">
            <h1>Velox</h1>

            <ul style={{ display: "flex", gap: "20px" }}>
                <li style={{ listStyle: "none" }}>Ferrari</li>
                <li style={{ listStyle: "none" }}>Lamborghini</li>
                <li style={{ listStyle: "none" }}>Maserati</li>
                <li style={{ listStyle: "none" }}>Porsche</li>
                <li style={{ listStyle: "none" }}>BMW</li>
                <li style={{ listStyle: "none" }}>Audi</li>
            </ul>

            <CartWidget/>
        </div>
    );
};