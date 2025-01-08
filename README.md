## 협업 규칙
1. 새로운 이슈들을 만들고(Open Issue) 작업이 끝나면 이슈를 닫는다.(Closing Issus)
2. PR 후 디스코드에 알리기
3. 메인 최신화하기 

## 이슈 사용법
풀리퀘스트를 보낼 때 이슈를 닫아주면 됩니다.

**1. 이슈 생성** 

**2. 브랜치 생성**

**3.풀리퀘 올리고 이슈 닫음**

이슈 닫는 명령어 

`close #이슈넘버`

1,2는 순서 바껴도 상관없습니다.

## 메인 최신화 방법
다른 사람 merge 후 메인최신화 하는 경우 꼭 **npm install**을 해주세요!
```jsx
git checkout 작업할 브랜치 
git fetch --all 
git push --set-upstream origin 브랜치명 (터미널에서 뜨면 사용하십쇼)
git rebase main

OR

git pull  // 메인 최신화
git rebase main
```
