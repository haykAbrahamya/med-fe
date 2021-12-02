import React from 'react'
import { Formik } from 'formik'


import { Input, Button } from 'ui'
import * as S from './LoginPage.styles'
import { initialValues } from './LoginPage.config'

export const LoginPage = ({
  login
}) => {
  return (
    <S.LoginPageContainer>
      <S.LoginForm>
        <S.PageTitle>Sign in</S.PageTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={login}
        >
          {
            ({
              values,
              handleSubmit,
              setFieldValue
            }) => (
              <>
                <Input
                  value={values.email}
                  placeholder='Email'
                  onChange={(val) => setFieldValue('email', val)}
                />
                <Input
                  type='password'
                  placeholder='Password'
                  value={values.password}
                  onChange={(val) => setFieldValue('password', val)}
                />
                <Button onClick={handleSubmit}>
                  Sign in
                </Button>
              </>
            )
          }
        </Formik>
      </S.LoginForm>
    </S.LoginPageContainer>
  )
}