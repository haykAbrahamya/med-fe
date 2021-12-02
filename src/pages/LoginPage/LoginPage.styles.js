import styled from 'styled-components'


import { CenteredFlex } from 'ui/styles'

export const LoginPageContainer = styled(CenteredFlex)`
  display: flex;
  flex-direction: column;
`

export const PageTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.black};
`

export const LoginForm = styled.div`
  gap: 10px;
  width: calc(100% - 40px);
  display: flex;
  margin-top: 20px;
  flex-direction: column;

  .main {
    margin-top: 10px;
  }

  @media (min-width: 440px) {
    width: 400px;
  }
`