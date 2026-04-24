import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id="home" className="header-container text-white z-10 h-screen min-h-[600px] relative">
            {/* Navbar Area */}
            <div className="absolute top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
                <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex flex-1">
                        <ul className="flex gap-6 lg:gap-10 text-base lg:text-lg font-medium">
                            <li><a href="#home" className="cursor-pointer hover:text-amber-400 transition-colors duration-200 block">الرئيسية</a></li>
                            <li><a href="#features" className="cursor-pointer hover:text-amber-400 transition-colors duration-200 block">خدماتنا</a></li>
                            <li><a href="#products" className="cursor-pointer hover:text-amber-400 transition-colors duration-200 block">منتجاتنا</a></li>
                            <li><a href="#about" className="cursor-pointer hover:text-amber-400 transition-colors duration-200 block">من نحن</a></li>
                            <li><a href="#contact" className="cursor-pointer hover:text-amber-400 transition-colors duration-200 block">اتصل بنا</a></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center text-white focus:outline-none hover:text-amber-400 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className="w-16 h-16 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-full p-1 shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer relative z-50 transition-transform hover:scale-105 duration-300">
                        <a href="#home"><img src="https://res.cloudinary.com/dwlkghuwv/image/upload/q_auto/f_auto/v1777047249/logo_fqoy2c.jpg" alt="logo" className="w-full h-full object-cover rounded-full" /></a>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                    <ul className="flex flex-col items-center gap-6 text-lg font-medium py-8 border-b border-white/10">
                        <li className="w-full"><a href="#home" onClick={toggleMenu} className="block hover:text-amber-400 w-full text-center py-2 transition-colors">الرئيسية</a></li>
                        <li className="w-full"><a href="#features" onClick={toggleMenu} className="block hover:text-amber-400 w-full text-center py-2 transition-colors">خدماتنا</a></li>
                        <li className="w-full"><a href="#products" onClick={toggleMenu} className="block hover:text-amber-400 w-full text-center py-2 transition-colors">منتجاتنا</a></li>
                        <li className="w-full"><a href="#about" onClick={toggleMenu} className="block hover:text-amber-400 w-full text-center py-2 transition-colors">من نحن</a></li>
                        <li className="w-full"><a href="#contact" onClick={toggleMenu} className="block hover:text-amber-400 w-full text-center py-2 transition-colors">اتصل بنا</a></li>
                    </ul>
                </div>
            </div>

            {/* Hero Content Area */}
            <div className="relative z-20  container mx-auto px-4 flex flex-col items-center justify-center h-full text-center pt-30">
                <span className="text-amber-400 font-bold tracking-wider mb-4 uppercase text-sm md:text-base border border-amber-400/50 rounded-full px-4 py-1 bg-amber-400/10">مطبعة أوفست احترافية</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                    حلول الطباعة المتكاملة <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">بجودة استثنائية</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mb-10 drop-shadow-md">
                    نقدم لك خدمات طباعة الأوفست والديجيتال بأعلى معايير الدقة والاحترافية لتلبية كافة احتياجاتك التجارية بأفضل الأسعار وأسرع وقت.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all hover:scale-105 duration-300">
                        اطلب عرض سعر
                    </button>
                    <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 duration-300 backdrop-blur-sm">
                        تصفح أعمالنا
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;