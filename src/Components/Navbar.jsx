import React from 'react'
import HamburgerMenu from './HamburgerMenu';
import ShoppingCartIcon from './ShoppingCartIcon'

const Navbar = () => {

    // const [searchInput, setSearchInput] = useState("");
    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    //   };

  return (
    <nav>
    <h1>SIGN UP FOR EMAIL & SMS</h1>
    <h2>Euphoria</h2>
    <input
   type="text"
   placeholder="Search Here"
//    onChange={handleChange}
//    value={searchInput} 
   />
   <HamburgerMenu/>
   <ShoppingCartIcon />
    </nav>
  )
}

export default Navbar