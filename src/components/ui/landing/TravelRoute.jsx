import "../../../index.css";
import MapRoute from '../../../assets/imgs/MapRoute.png';
import { LandingText } from "./LandingText";

export function TravelRoute() {
    return (
        <div className="bg-blue-950 grid lg:p-12 p-8 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="grid gap-10 w-full grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] relative z-10">
                <img src={MapRoute} alt="map" />

                <section className="justify-center content-center text-center mx-auto">
                    <LandingText title="HORA DE ESCAPAR" description="Diseñamos la ruta de tu viaje en cuestión de minutos" titleSize="lg:text-[3.2rem]" hrSize="w-full" pFont="lg:text-xl font-medium"/>                    
                </section>
            </div>
        </div>

    )   
}