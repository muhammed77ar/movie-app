import {css, styled} from "styled-components"

export const Headerr = styled.div`
background-image: linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );
height: 72px;
padding: 0px 40px;
margin: 0;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Logo = styled.img`
width: 40px;
@media screen and (max-width: 700px) {
  margin-top: 10px;
}
`
export const Icon = styled.div`
font-size: 40px;
display: flex;
color: white;
align-items: center;
cursor: pointer;

`


export const Hero = styled.div`
  background: url("../images/1-2.jpg");
  width: 100%;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media screen and (max-width: 700px) {
  height: 400px;
}
`;
export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 400px;
  @media screen and (max-width: 700px) {
  height: 400px;
}
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: white;
      font-size: 50px;
      text-transform: uppercase;
      margin: 0;
      margin-top: 80px;
      text-align: center;
    }
    p {
      color: white;
      margin: 0;
      text-align: center;
    }
    button {
      background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
      padding: 20px 40px;
      border: none;
      border-top-left-radius: 80px;
      border-bottom-right-radius: 80px;
      text-transform: capitalize;
      color: white;
      font-size: 20px;
      margin-top: 15px;
      cursor: pointer;
      transition: all 0.4s ease;
      &:hover {
        transform: scale(0.94);
      }
      @media screen and (max-width: 700px) {
        margin-bottom: 50px;
      }
    }
  }
`;

export const NavMenu = styled.nav`
  background-image: url("../images/pngtree-movie-background-template-picture-image_1638336.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1000;
  width: 350px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-100%")};
  transition: 0.3s ease;
  .navMenuItems {
    flex-direction: column;
    list-style: none;
    width: 100%;
    .navMenutoggel {
      font-size: 40px;
      display: flex;
      color: black;
      margin-left: 270px;
      @media screen and (max-width: 700px) {
        margin-left: 280px;
      }
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: fit-content;
    }
    .searchBar {
      form {
        position: relative;
        margin-right: 10px;
      }
      margin-right: 20px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      .searchIcon {
        position: absolute;
        right: 20px;
        font-size: 30px;
        top: 35px;
        cursor: pointer;
      }
      input {
        width: 280px;
        height: 30px;
        border-radius: 100px;
        border: 2px solid gray;
        padding: 10px 20px;
        font-size: 15px;
        font-weight: bold;
      }
    }
    .Or {
      .line-container {
        display: flex;
        align-items: center;
        text-align: center;
        margin-right: 30px;
        margin-top: 50px;
      }

      .line {
        flex-grow: 1;
        border-top: 1px solid #000;
      }

      .or {
        padding: 0 10px;
        color: #000;
        font-weight: bold;
      }
    }
  }
`;

