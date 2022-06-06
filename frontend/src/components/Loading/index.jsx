import React from 'react'
import styles from './Loading.module.css'
const Loading = () => {
  return (
    <div>
      <div class={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading;