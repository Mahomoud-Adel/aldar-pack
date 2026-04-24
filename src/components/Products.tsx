const products = [
    {
        id: 1,
        title: "الكتب والمجلدات",
        description: "طباعة الكتب والمجلدات العلمية والأدبية بأعلى جودة ورق وتجليد فاخر يضمن المتانة.",
        image: "/books.jpg",
    },
    {
        id: 2,
        title: "الكتالوجات",
        description: "طباعة كتالوجات تعريفية لمنتجاتك بتشطيبات راقية (سلك، دبوس، غراء) وبألوان زاهية.",
        image: "/catalog.jpg",
    },
    {
        id: 3,
        title: "بروفايل الشركات",
        description: "تصميم وطباعة بروفايل الشركات (Company Profile) بشكل احترافي يعكس هوية وقوة شركتك.",
        image: "/profile.jpg",
    },
    {
        id: 4,
        title: "البروشورات والفلايرات",
        description: "طباعة بروشورات دعائية وفلايرات بألوان جذابة وورق عالي الجودة للوصول الأمثل لعملائك.",
        image: "/brochure.jpg",
    },
    {
        id: 5,
        title: "علب التغليف",
        description: "تصميم وطباعة علب التغليف بجميع أنواعها ومقاساتها لحماية منتجك وإبرازه بشكل فخم.",
        image: "/box.jpg",
    },
    // {
    //     id: 6,
    //     title: "أكياس ورقية مخصصة",
    //     description: "أكياس ورقية (شنط هدايا وتسوق) مخصصة بشعارك لتعزيز علامتك التجارية وتجربة عملائك.",
    //     image: "https://images.unsplash.com/photo-1606788075765-d510f881b9e2?auto=format&fit=crop&q=80&w=800",
    // }
];

const Products = () => {
    return (
        <section id="products" className="py-24 bg-white text-right" dir="rtl">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-3xl mb-6 md:mb-0">
                        <span className="text-amber-500 font-bold tracking-wider mb-2 block">الدار باك كيان طباعة يعتمد عليه</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">أبرز <span className="text-amber-500">منتجاتنا</span></h2>
                        <p className="text-lg text-gray-600">
                            نحن متخصصون في طباعة الكتب، الكتالوجات، البروفايل، البروشورات، الفلايرات، وعلب التغليف بجميع أنواعها بأعلى معايير الجودة العالمية.
                        </p>
                    </div>
                    <button className="text-amber-600 font-bold hover:text-amber-700 transition-colors flex items-center gap-2 group">
                        عرض كل المنتجات
                        <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">{product.title}</h3>
                                <p className="text-gray-600 leading-relaxed flex-1">
                                    {product.description}
                                </p>
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <button className="text-gray-900 font-semibold hover:text-amber-500 transition-colors">
                                        اطلب الآن &larr;
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
