import {useState} from 'react';
import * as S from './style/styled.jsx'
import GlobalStyle from './style/globalStyle.jsx'
import Alface from './images/alface.png';
import Beterraba from './images/beterraba.png';
import Cenoura from './images/cenoura.png';
import Cereja from './images/cereja.png';
import Laranja from './images/laranja.png';
import Limao from './images/limao.png';
import Manga from './images/manga.png';
import Tomate from './images/tomate.png';
import Cart from './images/cart.png'


export default function App () {

    const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Alface',
      image: Alface
    },
    {
      id: 2,
      name: 'Beterraba',
      image: Beterraba
    },
    {
      id: 3,
      name: 'Cenoura',
      image: Cenoura
    },
    {
      id: 4,
      name: 'Cereja',
      image: Cereja
    },
    {
      id: 5,
      name: 'Laranja',
      image: Laranja
    },
    {
      id: 6,
      name: 'Limão',
      image: Limao
    },
    {
      id: 7,
      name: 'Manga',
      image: Manga
    },
    {
      id: 8,
      name: 'Tomate',
      image: Tomate
    },
  ]);

  return(
      <S.Container>
        <GlobalStyle/>
        <S.Header>
          <h1 className='title'>Horfruit Vai na Web</h1>
          <h2 className='subtitle'>Nossos Produtos</h2>
        </S.Header>

        <S.Main>
          <S.Products>
            {products.map(product => (
                <img src={product.image} alt={product.name} />
            ))}
          </S.Products>

          <S.Cart>
            <figure className="boxImage">
              <img src={Cart} alt='Cart Icon' />
              <figcaption>Arraste o seu produto aqui para colocar no carrinho</figcaption>
            </figure>
            
              <div className='buttons'>
              <button className='add-to-cart'>+</button>
              <button className='remove-from-cart'>-</button>
            </div>
          </S.Cart>
        </S.Main>
        
      </S.Container>
  )
}