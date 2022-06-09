import React from 'react'
import portfolio1 from '../img/portfolio1.webp'
import portfolio2 from '../img/portfolio2.webp'
import portfolio3 from '../img/portfolio3.webp'
import portfolio4 from '../img/portfolio4.webp'
import portfolio5 from '../img/portfolio5.webp'
import portfolio6 from '../img/portfolio6.webp'
import cirogenerica from '../img/cirogenerica.webp'



import logo from '../img/logo.png'

import historia from '../img/historia.webp'


export const VariablesContext = React.createContext()

const VariablesProvider = (props) => {


    const variablesGlobales = {
        iframeUbicacion: '',
        tituloUbicacion: 'Ubicación',
        direccion: '',
        mailTo: '',
        mail: '',
        iframeAlt: '',
        logo: logo,        
        altLogo: "logo tuentrada",
        altImg: "Las pastillas del abuelo",
        venueName: 'LAS PASTILLAS DEL ABUELO',
        tuentradaName: 'tuentrada.com',
        linkTuentrada: "https://tuentrada.com",
        linkVenueFb: "https://www.facebook.com/laspastillasdelabuelooficial",
        linkVenueTw: "https://twitter.com/LPDAok",
        linkVenueIg: "https://www.instagram.com/laspastillasdelabuelo/",
        volver: 'Volver',
        tituloEventos: 'PRÓXIMOS SHOWS',
        tituloImagenes: 'LAS PASTILLAS DEL ABUELO',
        portfolioImg1: portfolio1,
        portfolioImg2: portfolio2,
        portfolioImg3: portfolio3,
        portfolioImg4: portfolio4,
        portfolioImg5: portfolio5,
        portfolioImg6: portfolio6,
        imgEventos1: 'https://www.tuentrada.com/images/62300e06f2f33.webp',
        imgEventos2: 'https://www.tuentrada.com/images/621f6abfc6db2.webp',
        imgEventos3: 'https://www.tuentrada.com/images/621f65495bdbf.webp',
        imgEventosGenerica: cirogenerica,
        elementoNavbar1: 'Shows',
        elementoNavbar2: 'Gira',
        elementoNavbar3: 'Imágenes',
        elementoNavbar4: 'Ubicacion',
        tituloInicio: '',
        botonInicio: 'SHOWS',
        tituloHistoriaArriba: '',
        tituloHistoriaAbajo: '',
        imagenHistoria: historia,
        descripcion1: "",
        descripcion2: ""
        
    }

    const [variables, setVariables] = React.useState(variablesGlobales)




    return (
        <VariablesContext.Provider value={{variables, setVariables}}>
            {props.children}
        </VariablesContext.Provider>
    )
}

export default VariablesProvider
