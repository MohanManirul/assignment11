import React from 'react'
import blogData from "../../lib/blogData";
import styles from './Post.module.css'

let getPost =(id)=>{
  let data = blogData.filter((item)=> item.id ===id);
  return data;
}

export default function Post({ searchParams }) {
  const id= searchParams.id;
  let data = getPost(id);
  return (
    <div>
      <h1 className={styles.text}>This is Single Post Details Page</h1>
      <div className={styles.wrapperDetails}>
        {data.map((post)=>{
            return (
              <div key={post.id}>
                <div className={styles.flex}>
                  <span>ID:&nbsp;{post.id}</span>
                  
                </div>
                <p className={styles.title}>Title :&nbsp;{post.title}</p>
                <p className={styles.contentAll}><span >Content :</span>&nbsp;{post.content}</p>
                <span className={styles.id}>Date:&nbsp;{post.date}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}
