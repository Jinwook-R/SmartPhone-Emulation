## Smartphone Emulation

### 실행방법
  1. git clone 또는 압축파일 다운 후 압축풀기 
  2. 압축파일 다운로드 시, SmartPhone-Emulation-master 디렉터리 이동
  3. npm i -D 
  4. npm run build
  5. npm run watch
  6. http://localhost:9000 접속

### 파일 구조
  - css : html 요소들에 대한 css 효과 적용시킵니다.
  - dist : build된 main.js 파일이 저장된 디렉터리입니다.
  - images : [사진] 앱에 필요한 사진들이 저장된 디렉터리입니다.
  - src : 홈, 알람, 메모, 사진 컴포넌트를 클래스로 구현한 디렉터리입니다.
    - app.js : 프로그램 루트 컴포넌트이다. 홈 화면을 생성하고 각 앱 버튼 클릭에 대한 콜백함수를 전달합니다.
    - timebar.js : 프로그램 상단의 Back 버튼 , 현재 시각, NEW 버튼을 갖는 컴포넌트입니다.
    - appList.js : 홈 컴포넌트로입니다. 알람, 메모, 사진 앱을 클릭 이벤트로 실행시킵니다.
    - alarm.js : 알람 컴포넌트입니다. 알람 추가 및 삭제 그리고 과제 명세서에 요구된 기능을 포함합니다.
    - memo.js : 메모 컴포넌트입니다. 메모 추가 그리고 과제 명세서에 요구된 기능을 포함합니다.
    - picture.js : 사진 컴포넌트입니다. 가로 스크롤 이벤트로 사진을 선택하여 큰 상태로 볼 수 있습니다.
  - index.html : 프로그램이 시작되는 루트 html 파일입니다.

### 참고사항
  - build 시 css 로딩 에러 발생할 경우  Node.js 최신버전으로 업데이트를 해야합니다.
  
