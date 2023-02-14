import "./ScreenFour.css"
import CardPlano from "./CardPlano"
export default function ScreenFour(){
    return(
        <div className="screen4 bg-orangeProject">

            <div className="text-[#12100E] flex items-center justify-between mx-[7rem] pt-[3rem] mb-[3rem]">
                <div className="border-[1px] w-[40%] border-black "></div>
                <h1 className="font-black text-4xl">PLANOS</h1>
                <div className="border-[1px] w-[40%] border-black"></div>
            </div>
            
            <CardPlano valor="70,00*" tipoPlano="MENSAL -" texto="*R$70,00 preço mensal com direito a todas as atividades. Forma de pagamento: Em 12 vezes no cartão."/>
        </div>
    )
}