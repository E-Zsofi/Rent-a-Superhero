import React from "react";

function Header () {

    return (
        <header>
            <div className="logo">
                <img src="rent_a_hero.webp" alt="Business Logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Contact info
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Superheroes
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header