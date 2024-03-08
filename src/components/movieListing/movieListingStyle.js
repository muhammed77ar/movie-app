import styled from "styled-components";

const mobileBreakePoint  = "760px"
const tabletBreakPoint = "1000px"
export const MovieWrapper = styled.div`
width: 100%;
.category{
    color: lightblue;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-top: 30px;
}
`
export const MovieList = styled.div`
display: flex;
justify-content: center;
margin: 50px 0;
`
export const MovieContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, auto);
grid-gap: 40px;
@media screen and (max-width:${tabletBreakPoint}) {
    grid-template-columns: repeat(2, auto);
}
@media screen and (max-width:${mobileBreakePoint}) {
    grid-template-columns: repeat(1, auto);
}
@media screen and (min-width:1500px) {
    grid-template-columns: repeat(4, auto);
}
`
