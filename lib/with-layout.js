const withLayout = (Layout) => (Wrapped) => {
  return function (props) {
    return (
      <Layout {...props}>
        <Wrapped {...props} />
      </Layout>
    )
  }
};

export default withLayout;