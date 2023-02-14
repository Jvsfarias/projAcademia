export default function CardPlano({valor, tipoPlano, texto}){
    return(
        <div className="card mx-[7rem]">
            <div className="text-[#12100E] flex  justify-between items-center gap-24">
                <h1 className="font-black text-5xl">{valor}</h1>
                <div className="flex flex-col text-lg">
                    <h2 className="font-thin">PLANO</h2>
                    <h2 className="font-black">{tipoPlano}</h2>
                    <h2 className="font-black">TODAS AS ATIVIDADES</h2>
                </div>
                <p className="">{texto}</p>              
            </div>
            <div className="w-[100%] border-[1px] border-black mt-[15vh] "></div>
        </div>
    )
}