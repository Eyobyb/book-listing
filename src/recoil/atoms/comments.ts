import { CommentVerbos } from '@/types/comment';
import { atom } from 'recoil';

export const commentAtom = atom({
  key: 'comments', // unique ID (with respect to other atoms/selectors)
  default: [
    {
      description:
        '어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니꼭 봐주세용~!',
      title: '안녕 나 응애',
      info: '1일전',
      comment: 20,
      like: 2,
      url: require('../../images/avatar1.jpg'),
      isChecked: true,
      isOriginalComment: true,
    },
    {
      description: '오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다',
      title: 'ㅇㅅㅇ',
      info: '1일전',
      like: 5,
      url: require('../../images/avatar2.jpg'),
      isChecked: false,
      isOriginalComment: false,
    },
  ] as CommentVerbos[], // default value (aka initial value)
});
