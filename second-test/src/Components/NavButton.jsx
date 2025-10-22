export function Buttom({cor, nome, altura, largura}){
    return(
        <>
            <button className={`${cor} ${altura} ${largura}`}>{nome}</button>
        </>
    )
}