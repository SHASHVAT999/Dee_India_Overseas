import { Category } from "./types";

// Seed Data for Categories, Brands, Models, and Products
export const CATALOG_DATA: Category[] = [
    {
        id: "cat_motorcycle",
        name: {
            en: "Motorcycle Components",
            es: "Componentes para Motocicletas",
            zh: "摩托车部件"
        },
        slug: "motorcycle-parts",
        description: {
            en: "Precision-engineered critical systems for high-performance two-wheelers.",
            es: "Sistemas críticos de ingeniería de precisión para vehículos de dos ruedas de alto rendimiento.",
            zh: "专为高性能两轮车设计的精密关键系统。"
        },
        brands: [
            {
                id: "brand_bajaj",
                name: "Bajaj",
                slug: "bajaj",
                models: [
                    {
                        id: "mod_pulsar200",
                        name: "Pulsar RS200",
                        slug: "pulsar-rs200",
                        brand: "bajaj",
                        products: [
                            {
                                id: "prod_brk_p200",
                                name: { en: "Sintered Brake Pads", es: "Pastillas de freno sinterizadas", zh: "烧结刹车片" },
                                slug: "sintered-brake-pads-rs200",
                                images: ["https://images.unsplash.com/photo-1600706432502-77a0e2e32729?q=80&w=1000&auto=format&fit=crop"],
                                category: "motorcycle-parts",
                                brand: "bajaj",
                                model: "pulsar-rs200",
                                featured: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "brand_tvs_mc",
                name: "TVS",
                slug: "tvs",
                models: []
            },
            {
                id: "brand_yamaha",
                name: "Yamaha",
                slug: "yamaha",
                logo: "/images/brands/yamaha.png",
                models: [
                    {
                        id: "mod_r15",
                        name: "YZF R15",
                        slug: "yzf-r15",
                        brand: "yamaha",
                        products: [
                            {
                                id: "prod_vlv_r15",
                                name: { en: "Titanium Engine Valve Set", es: "Juego de válvulas de motor de titanio", zh: "钛合金发动机气门组" },
                                slug: "titanium-engine-valve-set-r15",
                                images: ["https://images.unsplash.com/photo-1486262715619-679ce42fb928?q=80&w=1000&auto=format&fit=crop"],
                                category: "motorcycle-parts",
                                brand: "yamaha",
                                model: "yzf-r15",
                                specifications: { "Material": "Grade 5 Titanium", "Weight": "14g (Intake)", "Tolerance": "±0.002mm" },
                                featured: true
                            },
                            {
                                id: "prod_clt_r15",
                                name: { en: "Performance Clutch Assembly", es: "Conjunto de embrague de rendimiento", zh: "高性能离合器总成" },
                                slug: "performance-clutch-assembly-r15",
                                images: ["https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1000&auto=format&fit=crop"],
                                category: "motorcycle-parts",
                                brand: "yamaha",
                                model: "yzf-r15",
                                featured: false
                            }
                        ]
                    },
                    {
                        id: "mod_mt15",
                        name: "MT-15",
                        slug: "mt-15",
                        brand: "yamaha",
                        products: []
                    }
                ]
            },
            {
                id: "brand_hero",
                name: "Hero",
                slug: "hero",
                models: []
            },
            {
                id: "brand_honda_mc",
                name: "Honda",
                slug: "honda",
                models: []
            },
            {
                id: "brand_lml",
                name: "LML",
                slug: "lml",
                models: []
            },
            {
                id: "brand_suzuki",
                name: "Suzuki",
                slug: "suzuki",
                models: []
            }
        ]
    },
    {
        id: "cat_threewheeler",
        name: {
            en: "Three-Wheeler Systems",
            es: "Sistemas para Triciclos",
            zh: "三轮车系统"
        },
        slug: "three-wheeler-systems",
        description: {
            en: "Robust drivetrain and suspension components engineered for heavy-duty commercial utility.",
            es: "Componentes robustos de transmisión y suspensión diseñados para servicios comerciales pesados.",
            zh: "专为重型商业用途设计的坚固传动系统和悬挂部件。"
        },
        brands: [
            {
                id: "brand_bajaj_tw",
                name: "Bajaj",
                slug: "bajaj-tw",
                models: []
            },
            {
                id: "brand_tvs_tw",
                name: "TVS",
                slug: "tvs-tw",
                models: [
                    {
                        id: "mod_king",
                        name: "TVS King",
                        slug: "tvs-king",
                        brand: "tvs-tw",
                        products: [
                            {
                                id: "prod_axl_king",
                                name: { en: "Heavy Duty Rear Axle", es: "Eje trasero de servicio pesado", zh: "重型后桥" },
                                slug: "heavy-duty-rear-axle-tvs-king",
                                images: ["https://images.unsplash.com/photo-1569426989668-d06e2ec6f437?q=80&w=1000&auto=format&fit=crop"],
                                category: "three-wheeler-systems",
                                brand: "tvs-tw",
                                model: "tvs-king",
                                featured: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "brand_piaggio",
                name: "Piaggio",
                slug: "piaggio",
                models: []
            }
        ]
    },
    {
        id: "cat_scooter",
        name: {
            en: "Scooter Parts",
            es: "Partes de Scooter",
            zh: "踏板车配件"
        },
        slug: "scooter-parts",
        description: {
            en: "Reliable and high-performance components suitable for a wide range of scooters.",
            es: "Componentes confiables y de alto rendimiento aptos para una amplia gama de scooters.",
            zh: "适用于各种踏板车的可靠高性能组件。"
        },
        brands: [
            {
                id: "brand_bajaj_chetak",
                name: "Bajaj Chetak",
                slug: "bajaj-chetak",
                models: []
            },
            {
                id: "brand_tvs_jupiter",
                name: "TVS Jupiter",
                slug: "tvs-jupiter",
                models: []
            },
            {
                id: "brand_lml_vespa",
                name: "LML Vespa",
                slug: "lml-vespa",
                models: []
            },
            {
                id: "brand_lambretta",
                name: "Lambretta",
                slug: "lambretta",
                models: []
            },
            {
                id: "brand_lml_star",
                name: "LML Star",
                slug: "lml-star",
                models: []
            }
        ]
    },
    {
        id: "cat_tyres",
        name: {
            en: "Inner Tubes & Tyres",
            es: "Cámaras y Neumáticos",
            zh: "内胎和轮胎"
        },
        slug: "inner-tubes-and-tyres",
        description: {
            en: "High-endurance rubber compounds for all-terrain global mobility.",
            es: "Compuestos de caucho de alta resistencia para movilidad global todo terreno.",
            zh: "适用于全地形全球出行的高耐用性橡胶混合物。"
        },
        brands: [
            {
                id: "brand_three_wheeler",
                name: "Three Wheeler",
                slug: "three-wheeler",
                models: []
            },
            {
                id: "brand_tubes",
                name: "Tubes",
                slug: "tubes",
                models: [
                    {
                        id: "mod_all",
                        name: "All Models",
                        slug: "all-models",
                        brand: "tubes",
                        products: [
                            {
                                id: "prod_tube_butyl",
                                name: { en: "Premium Butyl Inner Tube (17-inch)", es: "Tubo interior de butilo premium (17 pulgadas)", zh: "高级丁基内胎（17英寸）" },
                                slug: "premium-butyl-inner-tube-17",
                                images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop"],
                                category: "inner-tubes-and-tyres",
                                brand: "tubes",
                                model: "all-models",
                                featured: false
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
