import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`   

const Texto = styled.p`
    font-size: 17px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;

`

export const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto"/>

            <div>
                <Precio>El precio es de: <span>{PRICE} </span></Precio>
                <Texto>Precio mas alto del día: <span>{HIGHDAY} </span></Texto>
                <Texto>Precio mas bajo del día: <span>{LOWDAY} </span></Texto>
                <Texto>Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR} </span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE} </span></Texto>
            </div>
            
        </Contenedor>
    )
}
