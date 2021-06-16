const Blog = () => {

    Blog.getInitialProps = ({ query }) => {
        return {
            id: query.id,
        }
    }

    return (
      <div>
        Some blog
      </div>
    )
  }

  export default Blog;
