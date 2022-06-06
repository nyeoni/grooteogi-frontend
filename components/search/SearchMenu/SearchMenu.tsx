import React from 'react';
import { useSearchContext, useSearchDispatch } from '../context';
import { useHashtag } from '../usePosts';
import HorizontalScroll from './HorizontalScroll';
import Styled from './SearchMenu.styled';

const SearchMenu = () => {
  const searchState = useSearchContext();
  const searchDispatch = useSearchDispatch();

  const setKeyword = React.useCallback((keyword: string) => {
    searchDispatch({ type: 'SET_KEYWORD', keyword });
  }, []);

  // const { hashtags: data } = useHashtag();
  // console.log(data);
  const data = [
    '학교생활',
    '대외활동',
    '소프트웨어',
    '개발자취업',
    '코딩테스트',
    '편입',
    '유학',
    '공무원준비',
    '토익',
    'PEET',
  ];
  return (
    <Styled.container>
      <HorizontalScroll value={searchState.keyword} onClick={setKeyword} data={data} />
    </Styled.container>
  );
};

export default React.memo(SearchMenu);
