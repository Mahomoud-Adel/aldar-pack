const testimonials = [
    {
        id: 1,
        name: "أحمد محمود",
        company: "شركة الأفق للتجارة",
        text: "تعاملت مع العديد من المطابع، ولكن الجودة والسرعة التي وجدتها هنا استثنائية. كروت العمل الخاصة بشركتنا طُبعت بدقة متناهية وألوان زاهية فاقت توقعاتنا.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "سارة خالد",
        company: "مؤسسة إبداع للتصميم",
        text: "تجربة ممتازة من البداية للنهاية. فريق الدعم الفني ساعدنا في تجهيز ملفات البروشورات للطباعة، والنتيجة النهائية كانت مبهرة ومطابقة للتصميم 100%.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "محمد العتيبي",
        company: "مطاعم الذواقة",
        text: "قمنا بطباعة علب التغليف وأكياس الورق للمطعم، المنيو كان فخماً جداً. أسعارهم التنافسية للكميات الكبيرة جعلتهم شريكنا الاستراتيجي للطباعة.",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/86.jpg"
    }
];

const Testimonials = () => {
    return (
        <section id="about" className="py-24 bg-amber-50 text-right relative overflow-hidden" dir="rtl">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold tracking-wider mb-2 block">آراء العملاء</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">ماذا يقول <span className="text-amber-500">عملاؤنا؟</span></h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        نفخر بشراكتنا مع مئات الشركات والمؤسسات التي تثق في جودة مطبوعاتنا وخدماتنا.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative">
                            {/* Quote Icon */}
                            <div className="absolute top-6 left-6 text-amber-100">
                                <svg className="w-12 h-12 transform rotate-180" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-200"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg 
                                        key={i} 
                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed italic z-10 relative">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
