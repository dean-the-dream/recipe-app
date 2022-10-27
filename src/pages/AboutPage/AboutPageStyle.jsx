import styled from "styled-components"
import './AboutPage.scss'

const ConstainerDiv=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 2fr 1fr 1fr;
grid-template-areas: 
"top-left top-right"
"top-left  top-right"
"middle-left middle-right"
"bottom bottom";
background-color: beige;
height: fit-content;
`
// "bottom-row";
// grid-gap: 0


const TopLeftDiv=styled.div`
 grid-area: top-left;
 margin-top: 150px;
 
 div{
    display: flex;
    flex-direction: column;
    col-gap: 10px; 
    margin-left 100px;
 }
 button{
    width: 100px
 }
`
const TopRightDiv=styled.div`
 grid-area: top-right;
 margin-top: 100px;
 img{
    object-fit: cover;
    width: 500px;
    height: 500px;

 }
`
const MiddleLeftDiv=styled.div`
grid-area: middle-left;
margin-left:150px;
margin-right:150px;

`
const MiddleRightDiv=styled.div`
grid-area middle-right;
margin-top: 10px;
margin-right: 167.5px;
`
const BottomDiv=styled.div`
grid-area: bottom;
position: relative;
height: fit-content;

img{
    position: absolute;
}
`

export{ConstainerDiv, TopLeftDiv, TopRightDiv, MiddleLeftDiv, MiddleRightDiv, BottomDiv}