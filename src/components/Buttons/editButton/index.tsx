import styled from 'styled-components';

const EditButton = styled.button`
margin: 10px auto;
display: flex;
background-color: var(--primaria);
width: 45%;
height: 6rem;
border: 1px solid var(--cinza);

justify-content: center;
align-items: center;
color: var(--branco);
text-decoration: none;
font-size: 1.6rem;
border-radius: 0.8rem;
margin-bottom: 20px;
    
    @media (min-width: 768px){
        margin-right: 0px;
        width: 30%;  
    }
`

export default EditButton;
