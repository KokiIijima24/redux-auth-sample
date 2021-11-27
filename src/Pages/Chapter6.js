import React from 'react'
import StarRating from '../components/StarRating'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
## 6. ステート管理

### StarRating compoennt

### クリックイベントに反応させてStarの色を変える

### アプリケーション全体のステート管理
`

function Chapter6() {

  return (
    <div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      <StarRating />
    </div>
  )
}

export default Chapter6
