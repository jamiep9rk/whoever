import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PostTitleBox,
  PTitle,
  SearchBox,
  SearchText,
  SearchIcon
} from './PostTitle.style';

const PostTitle = ({ categoryId, categoryTitle, categoryLength, setPosts}) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');


  return (
    <PostTitleBox>
      <PTitle>{categoryTitle} 게시판</PTitle>
      <SearchBox>
        <SearchText type="text" value={keyword} onChange={(e) => {setKeyword(e.target.value)}}/>
        <SearchIcon
          className="fas fa-search"
          onClick={() => {
            history.push(`/searchpost=${categoryId}?keyword=${keyword}`);
          }}
        />
      </SearchBox>
    </PostTitleBox>
  );
};
export default PostTitle;
