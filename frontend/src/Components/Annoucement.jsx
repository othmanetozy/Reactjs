    import styled from "styled-components"
    
    
    const Container =styled.div`
        height:30px;
        background-color:teal;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:500;
        font-size:20px;
    `;
    
    const Annoucement = () => {
      return (
        <Container>

                La première boutique gaming qui offre des jeux pas cher.

        </Container>
      )
    }
    
    export default Annoucement