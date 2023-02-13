import Map from "./Map"
export default function ScreenTree(){
    return(
        <div className="flex flex-col items-center gap-7 mt-24 bg-[#303030] p-9">
            <h1 className="font-black text-4xl text-white tracking-wider">ONDE ESTAMOS</h1> 
            <Map/>
        </div>
        
    )
}