import React from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `
## 8. データ

### データの受信
GitHubではユーザーアカウントの情報をAPI経由で取得することができる
`

async function requestGitHubUser() {
  try {
    const response = await fetch(`https://api.github.com/users/koki-2424`)
    const userData = await response.json()
    console.log(userData)
  } catch (error) {
    console.log(error)
  }
}

function Chapter8() {
  requestGitHubUser()

  return (
    <div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  )
}

export default Chapter8
