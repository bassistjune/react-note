
import './App.css';

import Hello from './component/Hello'
// 모든 함수형 컴포넌트는 대문자로 시작!!
const testDesc = ' 테스트용 문구 '
const testObject = {
  objTit: '네이버링크',
  objUrl: 'https://naver.com'
}
function App() {
  return (
    <div className="ali-ct App">
      <div className="pd-1v">
        <h1 className="appTitle">testPage</h1>
        <p className="mt-1v">이 문장은 '{testDesc}' 입니다.</p>
        <a href={testObject.objUrl}>
          {testObject.objTit}
        </a>
        <Hello></Hello>
      </div>
    </div>
  );
}

export default App;
