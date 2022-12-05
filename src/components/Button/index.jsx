import React from 'react'

import { ButtonContainer } from './styles'

const Button = ({title, variant="primary", onClick, className}) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick} className={className}>
            {title}
        </ButtonContainer>
    )
}

export { Button }