import styled from "styled-components";


export const CardItem = styled.div`
background: url(${props => props.poster});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 300px;
height: 400px;
position: relative;
box-shadow:
  0.5px 0.5px 1.1px rgba(0, 0, 0, 0.029),
  1.1px 1.2px 2.6px rgba(0, 0, 0, 0.042),
  2px 2.1px 4.5px rgba(0, 0, 0, 0.051),
  3.1px 3.4px 7.1px rgba(0, 0, 0, 0.06),
  4.8px 5.2px 11px rgba(0, 0, 0, 0.069),
  7.5px 8.1px 17.2px rgba(0, 0, 0, 0.078),
  12.5px 13.5px 28.5px rgba(0, 0, 0, 0.091),
  25px 27px 57px rgba(0, 0, 0, 0.12)
;
transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-7px);
  }
`
export const CardContent = styled.div`
background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.800) 10%);
width: 100%;
position: absolute;
bottom: 0;

div{
    .title{
        color: white;
        font-size: 20px;
        margin-bottom: 0;
        margin-left: 15px;
        margin-right: 5px;
    }
    .type{
        color: orange;
        margin: 0;
        margin-left: 15px;
    }
    .rating{
        display: flex;
        margin-left: 10px;
        .star{
            color: gold;
            margin-left: 5px;
        }
    }
    .btns{
        display: flex;
        margin-top: 10px;
        margin-bottom: 20px;
        margin-left: 10px;
        .details{
            background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
        padding: 5px 10px;
        border: none;
        border-radius: 50px;
        text-transform: capitalize;
        color: white;
        cursor: pointer;
        transition: all 0.4s ease;
        margin-left: 5px;
        &:hover{
            transform: scale(0.94);
        }
        }
        .watchLater{
            background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
        padding: 5px 10px;
        border: none;
        border-radius: 50px;
        text-transform: capitalize;
        color: white;
        cursor: pointer;
        transition: all 0.4s ease;
        margin-left: 5px;
        &:hover{
            transform: scale(0.94);
        }
        }
    }
}
`