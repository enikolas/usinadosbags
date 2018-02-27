import React from 'react'

import './Produtos.css'
import alcasReforcadas from './alcasReforcadas.png'
import argolaSobreAlca from './argolaSobreAlca.png'
import bocaSuperiorAberta from './bocaSuperiorAberta.png'
import modeloComTampa from './modeloComTampa.png'
import valvulaDescargaAberta from './valvulaDescargaAberta.png'
import valvulaDescargaFechada from './valvulaDescargaFechada.png'
import valvulaSuperior from './valvulaSuperior.png'
import valvulaSuperiorTipoSaiaAberta from './valvulaSuperiorTipoSaiaAberta.png'
import valvulaSuperiorTipoSaiaFechada from './valvulaSuperiorTipoSaiaFechada.png'

const Produto = ({ nome, descricao, imagem }) => (
  <div className='Produto'>
    <h3>{nome}</h3>
    <div className='content'>
      <figure>
        <img src={imagem} alt={nome} />
      </figure>
      <p>{descricao}</p>
    </div>
  </div>
)

const Produtos = () => (
  <div className='Produtos'>
    <section>
      <Produto
        nome='Alças Reforçadas Profundas'
        descricao='Big Bag com ALÇAS BEM PROFUNDAS, dando maior resistência ao içamento do big bag.'
        imagem={alcasReforcadas}
      />
      <Produto
        nome='Argola sobre alça em A'
        descricao='Argolas impostas na alça para adequar e facilitar alguns tipos de içamento do big bag.'
        imagem={argolaSobreAlca}
      />
      <Produto
        nome='Alça Padrão'
        descricao='Alça padrão com 25cm úteis e reforço interno para que o big bag sofra menos esforço no içamento.'
        imagem={bocaSuperiorAberta}
      />
      <Produto
        nome='Boca superior aberta'
        descricao='Boca totalmente aberta, sem válvula ou saia, muito utilizado para produtos de grande tamanho.'
        imagem={bocaSuperiorAberta}
      />
      <Produto
        nome='Válvula Superior do tipo Saia'
        descricao='Válvula superior do tipo saia para carregamento, permite a abertura total, porém depois de cheio pode ser fechada com uma cordinha que acompanha o big bag.'
        imagem={valvulaSuperiorTipoSaiaFechada}
      />
      <Produto
        nome='Válvula Superior'
        descricao='Válvula superior para carregamento do big bag, permite o carregamento com silo pela praticidade de encaixe em bocais.'
        imagem={valvulaSuperior}
      />
      <Produto
        nome='Válvula Descarga'
        descricao='Válvula inferior para descarga do produto.'
        imagem={valvulaDescargaFechada}
      />
      <Produto
        nome='Válvula Descarga'
        descricao='Válvula inferior para descarga de produto na posição aberta.'
        imagem={valvulaDescargaAberta}
      />
      <Produto
        nome='Válvula Superior do tipo Saia'
        descricao='Válvula superior do tipo saia.'
        imagem={valvulaSuperiorTipoSaiaAberta}
      />
      <Produto
        nome='Modelo com Tampa'
        descricao='Modelo caixa com tampa para fechamento.'
        imagem={modeloComTampa}
      />
    </section>
  </div>
)

export default Produtos
