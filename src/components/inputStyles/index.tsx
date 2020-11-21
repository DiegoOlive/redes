import {css} from 'styled-components'

//compartilhe o css entre varios componentes
export const ContainerStyles = css`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

export const LabelStyles = css`
    font-size: 1.6rem;
    color: var(--cinza);
    margin-bottom: 10px;
`

export const InputStyles = css`
    height: 6rem;
    border: 1px solid var(--cinza);
    border-radius: 0.8rem;
    padding-left: 20px;
    color: var(--cinza);
    font-size: 1.6rem;
`