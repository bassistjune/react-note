import {useState} from "react";
import '../assets/sub.css'
export default function Welcome () {
  let [thumbs, sum] = useState(0)

  const [a, b  ] = useState('추천하기')
  const [icn] = useState('👍')
  if (thumbs >= 100) {
    alert('추천 숫자가 100을 넘어 초기화 됩니다.')
    thumbs = 0
  }
  return (
    <div className="ali-ct">
      <p>추천버튼 Component</p>
      <ul className="mt-1v thumbs-box">
        <li className="thumbs-content" onClick={() => {sum(thumbs+1)}}>
          <img src="http://via.placeholder.com/1600x1400/efefef/333333?text=Test" alt="더미 이미지"/>
          <em>
            <strong>{a}</strong>
            <i className="ml-1v">{icn}</i>
          </em>
          <span>{b}</span>
          <p><span>추천수:</span><strong className="ml-1v">{thumbs}</strong></p>
        </li>
      </ul>
    </div>

  )
}