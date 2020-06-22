import styled from 'styled-components'

export const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  gap: 2rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-items: center;
  grid-column-gap: 2rem;
  margin: 10rem 0;
`