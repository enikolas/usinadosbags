import React from 'react'
import FlipPage from 'react-flip-page'

import './Catalogo.css'
import capa from './imagens/capazoom.png'
import page2 from './imagens/02zoom.png'
import page3 from './imagens/03zoom.png'
import page4 from './imagens/04zoom.png'
import page5 from './imagens/05zoom.png'
import page6 from './imagens/06zoom.png'
import page7 from './imagens/07zoom.png'
import contraCapa from './imagens/contracapazoom.png'

const images = [capa, page2, page3, page4, page5, page6, page7, contraCapa]

const Catalogo = () => (
  <div className="Catalogo">
    <FlipPage
        width={421}
        height={586}
        orientation='horizontal'
        disableSwipe={true}
        flipOnTouchZone={40}
        flipOnTouch={true}
        uncutPages={true}
        showHint={true}
        showTouchHint={true}>
      { images.map((image, i) => <img key={i} src={`${image}`} />) }
    </FlipPage>
  </div>
)

export default Catalogo
