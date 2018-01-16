import React from 'react'

import './responsive-flipbook'
import './css/style'
import './css/page-style'
import './css/flipbook'

const Catalogo = () => (
  <div id='flipbook-container-1' class='flipbook-container'>
    <div id='flipbook-1' class='flipbook'>
      <div class='fb-page'>
        <div class='page-content'>
          <img src='imagens/capa.png' class='bg-img' />
          <img src='imagens/capazoom.png' class='bg-img zoom-large' />

        </div>
      </div>

      <div class='fb-page double'>
        <div class='page-content'>
          <div class='container'>
            <div class='preview-content features left'>
              &nbsp;
            </div>
            <div class='preview-content features right'>
              &nbsp;
            </div>
            <img src='imagens/02-03.png' class='bg-img' />
            <img src='imagens/02-03zoom.png' class='bg-img zoom-large' />

          </div>
        </div>
      </div>

      <div class='fb-page double'>
        <div class='page-content'>
          <div class='container'>
            <div class='preview-content features left'>
              &nbsp;
            </div>
            <div class='preview-content features right'>
              &nbsp;
            </div>
            <img src='imagens/04-05.png' class='bg-img' />
            <img src='imagens/04-05zoom.png' class='bg-img zoom-large' />

          </div>
        </div>
      </div>

      <div class='fb-page double'>
        <div class='page-content'>
          <div class='container'>
            <div class='preview-content features left'>
              &nbsp;
            </div>
            <div class='preview-content features right'>
              &nbsp;
            </div>
            <img src='imagens/06-07.png' class='bg-img' />
            <img src='imagens/06-07zoom.png' class='bg-img zoom-large' />

          </div>
        </div>
      </div>

      <div class='fb-page'>
        <div class='page-content'>
          <img src='imagens/contracapa.png' class='bg-img' />
          <img src='imagens/contracapazoom.png' class='bg-img zoom-large' />

        </div>
      </div>

    </div>
    <div id='fb-nav-1' class='fb-nav mobile stacked'>
      <ul>
        <li class='toc left'>Table Of Content</li>
        <li class='zoom center'>Zoom</li>
        <li class='slideshow center'>Slide Show</li>
        <li class='show-all right'>Show All Pages</li>
      </ul>
    </div>
  </div>
)

export default Catalogo
