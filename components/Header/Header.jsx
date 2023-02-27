import React, {useState, useEffect} from 'react';
import styles from './Header.module.scss';


export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    };
    
    const handleClick = (buttonId) => {
      let showDropdownCopy1 = showDropdown1;
      let showDropdownCopy2 = showDropdown2;
      let showDropdownCopy3 = showDropdown3;

      document.querySelector(`.${styles.search_wrapper}`).style.display = 'none';
    
      if (buttonId === 1) {
        showDropdownCopy1 = !showDropdown1;
      } else if (buttonId === 2) {
        showDropdownCopy2 = !showDropdown2;
      } else if (buttonId === 3) {
        showDropdownCopy3 = !showDropdown3;
      }
    
      setShowDropdown1(buttonId === 1 ? !showDropdown1 : false);
      setShowDropdown2(buttonId === 2 ? !showDropdown2 : false);
      setShowDropdown3(buttonId === 3 ? !showDropdown3 : false);

      setActiveLink(null);
    };

    useEffect(() => {
        setShowDropdown1(false);
        setShowDropdown2(false);
        setShowDropdown3(false);
        setActiveLink(null);
    },  [menuOpen]);

    useEffect(() => {
        if (!showDropdown1 && !showDropdown2 && !showDropdown3) {
          setActiveLink(null);
        }
    }, [showDropdown1, showDropdown2, showDropdown3]);

    useEffect(() => {
        const shouldHideBodyOverflow = menuOpen || showDropdown1 || showDropdown2 || showDropdown3;
        document.body.style.overflow = shouldHideBodyOverflow ? 'hidden' : 'auto';
    }, [menuOpen, showDropdown1, showDropdown2, showDropdown3]);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) {
            setMenuOpen(false);
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setShowDropdown1(false);
            setShowDropdown2(false);
            setShowDropdown3(false);
          }
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [setShowDropdown1, setShowDropdown2, setShowDropdown3]);



    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.cima}`}>
                <div className={`${styles.nav_container}`}>
                    <a href='#'><img src='/images/logo2.png' className={`${styles.logo}`}></img></a>
                    <nav className={`${styles.menu}`}>
                        <ul className={`${styles.menu_lista}`}>
                            <li className={`${styles.menu_li}`}>
                                <button onClick={() => {handleClick(1);setActiveLink(1);}} className={`${styles.link_menu} ${activeLink === 1 ? styles.active_link : ''}`}>Plan Your Trip <span className={`${styles.arrow_hover}`}><img src='/images/arrow-down.svg'></img></span></button>
                            </li>
                            <li className={`${styles.menu_li}`}>
                                <button onClick={() => {handleClick(2);setActiveLink(2);}} className={`${styles.link_menu} ${activeLink === 2 ? styles.active_link : ''}`}>Things To Do <span><img className={`${styles.arrow_hover}`} src='/images/arrow-down.svg'></img></span></button>
                            </li>
                            <li className={`${styles.menu_li}`}>
                                <button onClick={() => {handleClick(3);setActiveLink(3);}} className={`${styles.link_menu} ${activeLink === 3 ? styles.active_link : ''}`}>Destinations <span><img className={`${styles.arrow_hover}`} src='/images/arrow-down.svg'></img></span></button>
                            </li>
                            <li className={`${styles.menu_li} ${styles.search_wrapper_desk}`}>
                                <img className={`${styles.img_search}`} src='/images/search.png'></img>
                                <input placeholder='Search...' className={`${styles.search}`}></input>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={handleMenuClick} className={`${styles.btn_menu} ${menuOpen ? styles.active : ''}` }>
                            <div className={`${styles.bars}`}></div>
                            <div className={`${styles.bars}`}></div>
                            <div className={`${styles.bars}`}></div>
                    </button>
                </div>
                <div style={{ transform: `translateY(${menuOpen ? '0' : '-200px'})` }} className={`${styles.menu_mobile}`}>
                    <ul className={`${styles.menu_lista_mobile}`}>
                        <li className={`${styles.menu_li}`}>
                            <button onClick={() => {handleClick(1);setActiveLink(1);}} className={`${styles.link_menu} ${activeLink === 1 ? styles.active_link : ''} `}>Plan Your Trip<span className={`${styles.arrow_hover}`}><img src='/images/arrow-down.svg'></img></span></button>
                        </li>
                        <li className={`${styles.menu_li}`}>
                            <button onClick={() => {handleClick(2);setActiveLink(2);}} className={`${styles.link_menu} ${activeLink === 2 ? styles.active_link : ''}`}>Things To Do<span className={`${styles.arrow_hover}`}><img src='/images/arrow-down.svg'></img></span></button>
                        </li>
                        <li className={`${styles.menu_li}`}>
                            <button onClick={() => {handleClick(3);setActiveLink(3);}} className={`${styles.link_menu} ${activeLink === 3 ? styles.active_link : ''}`}>Destinations<span className={`${styles.arrow_hover}`}><img src='/images/arrow-down.svg'></img></span></button>
                        </li>
                    </ul>
                    <div style={{ display: (showDropdown1 || showDropdown2 || showDropdown3) ? 'none' : 'block' }} className={`${styles.search_wrapper}`}>
                        <img className={`${styles.img_search}`} src='/images/search.png'></img>
                        <input placeholder='Search...' className={`${styles.search}`}></input>
                    </div>
                </div>
            </div>
            <div className={`${styles.baixo}`}>
                <div className={'container'}>
                    <div style={{ display: showDropdown1 ? "block" : "none" }} className={`${styles.planyourtrip} ${styles.dropdown}`} id="planyourtrip">
                        <div className={`${styles.dropdown_body}`}>
                            <ul className={`${styles.dropdown_lista}`}>
                                <div className={`${styles.dropdown_link_left}`}>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>First-time Visitor Info</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Airport Acess Tips</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Getting to Japan</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Pratical Travel Guides</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Tour Companies</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Japan Travel Specialists</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Special Packages</a>
                                    </li>
                                </div>
                                <div>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Transportations in Japan</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Tourist Info Centers</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Volunteer Guides</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>FAQ</a>
                                    </li>    
                                </div>
                            </ul>
                            <div className={`${styles.banners_menu}`}>
                                <a href="#"><div style={{backgroundImage: `url("/images/restaurant.jpg")`}} className={`${styles.img_menu_banner} ${styles.img_restaurant}`}><span className={`${styles.text_banner_menu}`}>Restaurant Search</span></div></a>
                                <a href='#'><div style={{backgroundImage: `url("/images/tour.jpg")`}} className={`${styles.img_menu_banner} ${styles.img_tour}`}><span className={`${styles.text_banner_menu}`}>Tour & Activies</span></div></a>
                            </div>
                            <div className={`${styles.sun_menu}`}>

                            </div>
                        </div>
                    </div>
                    <div style={{ display: showDropdown2 ? "block" : "none" }} className={`${styles.dropdown} ${styles.thingstodo}`} id="thingstodo">
                        <div className={`${styles.dropdown_body}`}>
                            <ul className={`${styles.dropdown_lista}`}>
                                <div className={`${styles.dropdown_link_left}`}>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Winter Guide</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Mt Fuji Guide</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Cherry Blossoms</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>World Heritage Site</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Hot Springs</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Mountains & Highlands</a>
                                    </li>
                                    <li className={`${styles.dropdown_li} ${styles.dropdown_li_last}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Nature</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>All Stories & Guides</a>
                                    </li>
                                </div>
                                <div>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Action & Adventure</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Art & Design</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Attractions</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Culture</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Festivals & Events</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Gastronomy</a>
                                    </li>
                                    <li className={`${styles.dropdown_li} ${styles.dropdown_li_last}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>History</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>All Things To Do</a>
                                    </li>    
                                </div>
                            </ul>
                            <div className={`${styles.banners_menu}`}>
                                <a href="#"><div style={{backgroundImage: `url("/images/hakuba.jpg")`}} className={`${styles.img_menu_banner} ${styles.img_hakuba}`}><span className={`${styles.text_banner_menu}`}>Hakuba</span></div></a>
                                <a href='#'><div style={{backgroundImage: `url("/images/kerama.jpg")`}} className={`${styles.img_menu_banner} ${styles.img_kerama}`}><span className={`${styles.text_banner_menu}`}>Kerama Islands</span></div></a>
                            </div>
                            <div className={`${styles.sun_menu}`}>

                            </div>
                        </div>
                    </div>
                    <div style={{ display: showDropdown3 ? "block" : "none" }} className={`${styles.dropdown} ${styles.destinations}`} id="destinations">
                        <div className={`${styles.dropdown_body}`}>
                            <ul className={`${styles.dropdown_lista}`}>
                                <div className={`${styles.dropdown_link_left}`}>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link} ${styles.fw_800}`}>Top Destinations</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Tokyo</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Kyoto</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Osaka</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Nara</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Hokkaido</a>
                                    </li>
                                    <li className={`${styles.dropdown_li} ${styles.dropdown_li_last}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Okinawa</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>View All Destinations</a>
                                    </li>
                                </div>
                                <div>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Nagano</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Hakone</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Nikko</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Sapporo & around</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Chiba</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Yamaguchi</a>
                                    </li>
                                    <li className={`${styles.dropdown_li} ${styles.dropdown_li_last}`}>
                                        <a href='#' className={`${styles.dropdown_link}`}>Kanto</a>
                                    </li>
                                    <li className={`${styles.dropdown_li}`}>
                                        <a href='#' className={`${styles.dropdown_link} ${styles.fw_800}`}>Map of Japan</a>
                                    </li>    
                                </div>
                            </ul>
                            <div className={`${styles.banners_menu}`}>
                                <a href="#"><div style={{backgroundImage: `url("/images/furano.jpg")`}} className={`${styles.img_menu_banner} ${styles.img_furano}`}><span className={`${styles.text_banner_menu}`}>Furano Ski Resort</span></div></a>
                                <a href='#'><div style={{backgroundImage: `url("/images/yunishigawa.jpg")`}} className={`${styles.img_menu_banner} ${styles.img_yunishigawa}`}><span className={`${styles.text_banner_menu}`}>Yunishigawa Kamakura</span></div></a>
                            </div>
                            <div className={`${styles.sun_menu}`}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
    
}

