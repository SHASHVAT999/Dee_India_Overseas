import { MotorcycleCADWireframe, MotorcycleExplodedAssembly, MotorcycleArchitecturalDrafting } from "@/components/ui/VehicleThemesPrototypes"

export default function ThemesTestPage() {
    return (
        <div className="min-h-screen bg-stone-50 pt-32 pb-20 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6 text-center tracking-tight">Vehicle Theme Prototypes</h1>
                <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto text-lg">
                    Review the three proposed art directions for the hero section vehicles. Which style best represents the mature, out-of-the-box, premium engineering brand of Dee India Overseas?
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                    {/* Theme 4: CAD */}
                    <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-xl transition-shadow">
                        <div className="w-full aspect-[4/3] flex items-center justify-center bg-slate-900 rounded-xl mb-8 p-6 relative overflow-hidden">
                            <MotorcycleCADWireframe className="w-full max-w-[320px] h-auto relative z-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-stone-900 mb-4 whitespace-nowrap">4. Precision CAD Wireframe</h2>
                        <p className="text-stone-500 text-center leading-relaxed">
                            Ultra-dense intersecting wireframe mesh mimicking premium 3D engineering software. Features glowing selection nodes and a sweeping laser scan effect.
                        </p>
                    </div>

                    {/* Theme 5: Exploded */}
                    <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-xl transition-shadow">
                        <div className="w-full aspect-[4/3] flex items-center justify-center bg-slate-50 rounded-xl mb-8 p-6 relative overflow-hidden">
                            <MotorcycleExplodedAssembly className="w-full max-w-[320px] h-auto drop-shadow-sm relative z-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-stone-900 mb-4 whitespace-nowrap">5. Isometric Assembly</h2>
                        <p className="text-stone-500 text-center leading-relaxed">
                            An exploded-view technical diagram emphasizing individual OEM components floating into place. Perfect for a parts manufacturer.
                        </p>
                    </div>

                    {/* Theme 6: Drafting */}
                    <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:shadow-xl transition-shadow">
                        <div className="w-full aspect-[4/3] flex items-center justify-center bg-stone-100 rounded-xl mb-8 p-4 relative">
                            <MotorcycleArchitecturalDrafting className="w-full max-w-[320px] h-auto relative z-10 drop-shadow-md" />
                        </div>
                        <h2 className="text-2xl font-bold text-stone-900 mb-4 whitespace-nowrap">6. Architectural Drafting</h2>
                        <p className="text-stone-500 text-center leading-relaxed">
                            A hyper-realistic engineering paper draft with crosshairs, exact dimensions, tracking marks, and microscopic specification callouts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
