import React from 'react';

function Nav() {

    const categories = [
        {
            name: 'portfolio',
        },
        {
            name: 'contact'
        },
        {
            name: 'resume',
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <a href='#about'>
                <h1>{'<'}CG/{'>'}</h1>
            </a>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>
                            About Me
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li className='mx-1' key={category.name}>
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;