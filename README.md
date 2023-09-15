# DONGA-FE

### 팀원

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/AAminha"><img src="https://avatars.githubusercontent.com/u/87255791?v=4" width="150px;" alt="AAminha"/><br /><sub><b>안민하</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hoyyChoi"><img src="https://avatars.githubusercontent.com/u/110888511?v=4" width="150px;" alt="hoyyChoi"/><br /><sub><b>최호연</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

### Branch 규칙
- main / develop
- 형식 `[Header]/[이슈 번호]/[기능]`
  - ex) `feat/#2/login`  

|Header|기능|  
|---|---|  
|main|최종 배포할 서비스 내용의 브랜치|
|develop|주요 개발 브랜치, 이 브랜치를 기준으로 각자 작업한 기능을 merge|
|feat (feature)|기능 개발 브랜치, 기능 개발이 완료 시 develop 브랜치에 merge|
|fix|기능 수정 브랜치, 이미 develop 브랜치에 merge된 기능을 수정하고 완료 시 develop 브랜치에 merge|
|hotfix|master 브랜치로 배포 후에 버그가 생겼을 때 긴급 수정하는 브랜치|

### 이슈
- 템플릿 이용
- 이슈 내용 / 작업 내용 / 참고 사항

### Commit 규칙
- 깃컨벤션
- 영어로 작성

|Header|기능|  
|----|-----------------|  
|feat|새로운 기능 추가|
|fix|버그 수정 혹은 기능 수정|
|design|css 등 사용자 UI 디자인 추가 및 수정|
|docs|문서 추가 및 수정|
|style|코드 포맷팅, 세미콜론 누락, 코드 변경이 없이 추가 및 수정|
|refactor|코드 리펙토링|
|build|빌드 관련 파일 추가 및 수정|
|rename|파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행|
|remove|파일을 삭제하는 작업만 수행|
|chore|그 외 자잘한 수정|

### PR 규칙
- 기능 단위 (구현 / 수정)
- 템플릿 이용
- 이슈 내용 / 작업 내용 / 참고 사항

### Package, Lint
- yarn
- eslint(airbnb)
- prettier

### 기술 스택
- 메인 프레임워크 : React
- 언어 : TypeScript
- 빌드 : vite
- 전역 상태 관리 : Recoil
- 통신 : axios
- CSS : styled component

### 폴더 구조 (src 아래)
- page
  - 컴포넌트 합치기
- component
  - 각 폴더
- API
