import {styled , keyframes } from "styled-components"

const mobileBreakPoint = "1100px"
const mobileBreakPoint2 = "860px"
const mobileBreakPoint3 = "560px"

export const CardWrapper = styled.div`
display: flex;
justify-content: center;
background: url("../images/purple-space-background-1920-x-1080-bi6cgy8tdjo5nkgy.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
z-index: -1;
`

export const CardSection = styled.div`
margin: 50px 0;
display: grid;
grid-template-columns: repeat(2, auto);
width: 80%;
@media screen and (max-width: ${mobileBreakPoint}) {
    grid-template-columns: repeat(1, auto);
}
`
export const RightSection = styled.div`
background: url(${(props) => props.poster});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 300px;
height: auto;
border-bottom-left-radius: 20px;
border-top-left-radius: 20px;
box-shadow:
  0.6px 0px 0.7px rgba(0, 0, 0, 0.042),
  1.5px 0px 1.7px rgba(0, 0, 0, 0.061),
  2.8px 0px 3.1px rgba(0, 0, 0, 0.075),
  4.9px 0px 5.6px rgba(0, 0, 0, 0.089),
  9.2px 0px 10.4px rgba(0, 0, 0, 0.108),
  22px 0px 25px rgba(0, 0, 0, 0.15)
;
z-index: 1;
@media screen and (max-width: ${mobileBreakPoint}) {
  box-shadow:
  0px 0.9px 0.7px rgba(0, 0, 0, 0.042),
  0px 2.1px 1.7px rgba(0, 0, 0, 0.061),
  0px 4px 3.1px rgba(0, 0, 0, 0.075),
  0px 7.1px 5.6px rgba(0, 0, 0, 0.089),
  0px 13.4px 10.4px rgba(0, 0, 0, 0.108),
  0px 32px 25px rgba(0, 0, 0, 0.15)
;
    height: 50vh;
    width: 100%;
    
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}
`

export const LeftSection = styled.div`
background-image: linear-gradient(-225deg, #c0bcbc 0%, #EACCF8 48%, #6654F1 100%);
  background-blend-mode: screen;
  height: 100%;
  width: fit-content;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow-y: auto;
 
  @media screen and (max-width: ${mobileBreakPoint}) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 50vh;
  }
  .left {
    position: relative;
    margin-left: 30px;
    margin-right: 20px;
    @media screen and (max-width: ${mobileBreakPoint}) {
      margin-left: 20px;
      position: unset;
    }
  }
    .watchLater {
      background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
      position: absolute;
      bottom: 0;
      right: 0;
      margin-top: 10px;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      text-transform: capitalize;
      color: white;
      cursor: pointer;
      transition: all 0.4s ease;
      &:hover {
        transform: scale(0.94);
      }
    @media screen and (max-width: ${mobileBreakPoint}) {
      position: unset;
      margin-bottom: 10px;
      margin-top: 0;
    }
    }
    .Title {
      font-size: 40px;
      margin: 0;
      margin-top: 10px;
    }

  .details1 {
    color: darkblue;
    display: grid;
    grid-template-columns: repeat(4, auto);
    @media screen and (max-width: ${mobileBreakPoint2}) {
      grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: ${mobileBreakPoint3}) {
      grid-template-columns: repeat(1, auto);
      gap: 10px;
    }
    .rating {
      margin-right: 15px;
      display: flex;
      align-items: center;
      margin-left: 0;
      .star {
        color: gold;
        font-size: 20px;
        margin-left: 2px;
        margin-bottom: 5px;
        margin-right: 2px;
      }
    }
    .vote {
      margin-right: 15px;
      display: flex;
      align-items: center;
      .like {
        color: rgb(0, 166, 255);
        font-size: 20px;
        margin-left: 2px;
        margin-bottom: 5px;
        margin-right: 2px;
      }
    }
    .runTime {
      margin-right: 15px;
      display: flex;
      align-items: center;
      .run {
        font-size: 20px;
        margin-left: 2px;
        margin-bottom: 5px;
        margin-right: 2px;
      }
    }
    .year {
      display: flex;
      align-items: center;
      .cal {
        color: rgb(255, 75, 75);
        font-size: 20px;
        margin-left: 2px;
        margin-bottom: 5px;
        margin-right: 2px;
      }
    }
  }
  .story {
    width: fit-content;
    margin: 20px 0;
  }
  .details2 {
    width: 100%;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(1, auto);
    @media screen and (max-width: ${mobileBreakPoint2}) {
      gap: 10px;
    }
    .director {
      display: flex;
      align-items: center;
      .chair {
        font-size: 20px;
        margin-left: 2px;
        margin-bottom: 5px;
        margin-right: 2px;
      }
    }
    .actors {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .act {
        font-size: 20px;
        margin-left: 2px;
        margin-bottom: 5px;
        margin-right: 2px;
      }
    }
  }
`;
const roll = keyframes`
  0% { top: 0px; }
  100% { top: -15px; }
`;
export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  min-height: 200px;
 

  .loader {
    overflow: hidden;
    &__text {
      margin: 5px auto;
      color: white;
      text-transform: uppercase;
      font-family: 'Anton', sans-serif;
    }

    &__filmstrip {
      position: relative;
      width: 70px;
      height: 100px;
      background: white;
      
      
      
      &:before,
      &:after {
        content: '';
        position: absolute;
        height: 100%;
        overflow: hidden;
        border: 5px dashed black;
        animation: ${roll} 20ms infinite;
      }

      &:before {
        left: 5px;
      }

      &:after {
        right: 5px;
      }
    }
  }
`;