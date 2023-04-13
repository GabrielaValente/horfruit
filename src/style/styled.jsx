import styled from 'styled-components';

export const Container = styled.section`
  background: #F66000;
    
`;

export const Header = styled.header`
    color: #fafafa;

    .texts {
  display: flex;
  flex-direction: column;

    .title {
    color: white;
  }

    .subtitle {
    color: white;
  }
}
`

export const Main = styled.section`
padding: 2vw;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  height: 100vh;


`;

export const Products = styled.section `
  width: 80%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 22%;
    border-radius: 50px;
    padding: 2vw;
  }
`;

export const Cart = styled.section `
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 120px;
    background-color: #F7E0CE;
    gap: 20px;


    .boxImage {
        width: 70%;
        height: 50%;
        border: solid 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 35px;
        background: #D3C5BB;

        figcaption {
            width: 60%;
            text-align: center;            
        }

    }

    .buttons {
        width: 250px;
        height: 77px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1vh;
        border-radius: 35px;
        background: #D3C5BB;
        border: 1px solid;

        .add-to-cart {
            width: 30px;
            height: 30px;
            background: transparent;
            border-radius: 50%;
            font-size: 27px;
            cursor: pointer;

        }

        .remove-from-cart {
            width: 30px;
            height: 30px;
            background: transparent;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;



        }
    }

`