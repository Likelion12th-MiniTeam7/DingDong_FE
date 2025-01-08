## 협업 규칙
1. 새로운 이슈들을 만들고(Open Issue) 작업이 끝나면 이슈를 닫는다.(Closing Issus)
2. commit 컨벤션 지키기
3. PR 후 디스코드에 알리기
4. 메인 최신화하기

## 커밋 컨벤션

- Feat: 새로운 기능을 추가

- Fix: 버그 수정

- Design CSS: 등 사용자 UI 디자인 변경

- Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우

- Refactor: 프로덕션 코드 리팩토링

- Comment: 필요한 주석 추가 및 변경

- Docs: 문서 수정

- Test: 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음

- Chore: 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음

- Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우

- Remove: 파일을 삭제하는 작업만 수행한 경우

- !BREAKING CHANGE: 커다란 API 변경의 경우

- !HOTFIX: 급하게 치명적인 버그를 고쳐야하는 경우

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
