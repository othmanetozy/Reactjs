import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
 



const Container = styled.div`

    width:100%;
    height:100vh;
    display:flex;
    background-color:white;
    position:relative;
    overflow:hidden;
`;


const Arrow = styled.div`
        width:50px;
        height:50px;
        background-color:white;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        top:0;
        bottom:0;
        left:${propos=>propos.direction ==="left" && "10px"};
        right:${propos=>propos.direction ==="right" && "10px"};
        margin:auto;
        cursor:pointer;
        opacity:0.5;
`;
const Wrapper = styled.div`
    height:100;
    display:flex;
    transition:all 1.5s ease;;
`;

const Slider = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${propos=>propos.bg};

`;


const ImageContainer = styled.div`
    flex:1;
    height:100%;
    padding:-90%;
    padding-top:10%;
    margin-right:20%;
    font-weight:400;
    margin:200;
`;

const Image = styled.img`
    height:118%;
`;
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`;

const slider = () => {
  
             return (
                <Container>
                    <Arrow>
                        <ArrowLeftOutlinedIcon />
                    </Arrow>
                    <Wrapper>
                        <Slider bg="f5fafd">
                       <ImageContainer>
                           <Image src='item.https://images7.alphacoders.com/903/903582.jpg' />
                       </ImageContainer>
                        <InfoContainer>
                        </InfoContainer>   
                    </Slider>
                    <Slider bg="f5fafd">
                       <ImageContainer>
                           <Image src='item.https://images7.alphacoders.com/123/1234774.jpg' />
                       </ImageContainer>
                        <InfoContainer>
                        </InfoContainer>   
                    </Slider>
                    </Wrapper>
                    <Arrow>
                        <ArrowRightOutlinedIcon />
                    </Arrow>
                </Container>
    
  );
};
export default slider;