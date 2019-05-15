import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../../constants'

const BlogPanel = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  return (
    <>
      <div className="flex flex-fixed black">
        {authToken && (
        <div className="flex">
          <Link to="/forum/createpost" className="ml1 no-underline black">
            Add
          </Link>
        <div className="ml1">|</div>
          <Link to="/forum/drafts" className="ml1 no-underline black">
            Drafts
          </Link>
        </div>
        )}
      </div>
    </>
  )
}

export default withRouter(BlogPanel)
