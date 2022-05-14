import styled from '@emotion/styled';
import Header from '@components/common/Header';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Styled = {
  container: styled.article`
    background-color: white;
  `,
  content: styled.main`
    margin: 25px auto 0;
    padding: 0 5% 10% 5%;
    @media (min-width: 1060px) {
      display: grid;
      max-width: 1060px;
      grid-template-columns: auto 375px;
      gap: 25px;
    }
    @media (max-width: 1059px) {
      display: flex;
      flex-direction: column;
      row-gap: 50px;
    }
  `,
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Styled.container>
      <Header device={'md'}></Header>
      <Styled.content>{children}</Styled.content>
    </Styled.container>
  );
};

export default Layout;
