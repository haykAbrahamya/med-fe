import React from 'react'
import styled from 'styled-components'


export const Input = ({
  ...rest
}) => {
  const onInputChange = (e) =>
    rest.onChange(e.target.value)

  return (
    <StyledInput
      {...rest}
      onChange={onInputChange}
    />
  )
}

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #fff;
  width: calc(100% - 24px);

  &::placeholder {
     color: ${({ theme }) => theme.colors.lightGray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.purple};
  }
`