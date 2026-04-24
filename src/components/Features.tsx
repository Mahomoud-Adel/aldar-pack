const features = [
    {
        title: "جودة أوفست لا تُضاهى",
        description: "نستخدم أحدث ماكينات الطباعة لضمان دقة ألوان فائقة وجودة استثنائية لكل مطبوعاتك.",
        icon: (
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        )
    },
    {
        title: "أسعار تنافسية للكميات",
        description: "نوفر أفضل الأسعار لطباعة الكميات الكبيرة لتلبية احتياجات الشركات والمؤسسات.",
        icon: (
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "سرعة في التسليم",
        description: "نلتزم بالمواعيد المحددة ونسلم طلباتك في الوقت المتفق عليه بأعلى كفاءة ممكنة.",
        icon: (
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "دعم فني وتصميم",
        description: "فريق من المصممين المحترفين جاهز لمساعدتك في إخراج أعمالك بأفضل صورة ممكنة.",
        icon: (
            <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-gray-50 text-right" dir="rtl">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">لماذا تختار <span className="text-amber-500">مطبعتنا؟</span></h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        نحن لا نطبع فقط، بل نصنع تجربة متكاملة تبدأ من جودة الورق وحتى التسليم في الموعد المحدد.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="w-20 h-20 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{feature.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
