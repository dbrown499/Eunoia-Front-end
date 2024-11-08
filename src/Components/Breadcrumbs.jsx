import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styling/ProductList.scss';


const Breadcrumb = () => {
    const location = useLocation();

    const pathnames = location.pathname.split('/').filter((x) => x);

    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <nav aria-label="breadcrumb">
            <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={to}>
                            {isLast ? (
                                <span>{capitalizeFirstLetter(value)}</span>
                            ) : (
                                <>
                                    {/* <span> &gt; </span> */}
                                    <Link to={to}>{capitalizeFirstLetter(value)}</Link>
                                    {/* <span> &gt; </span> */}
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
