exports.onCreateNode = ({ node, getNode }) => {
    // console.log(node.internal.type,'!!!s')
    if (node.internal.type === `SitePage`) {
        console.log(node.internal)
        const fileNode = getNode(node.parent)
        console.log(`!!!!\n`, fileNode)
    }
    if (node.internal.type === `MarkdownRemark`) {
      const fileNode = getNode(node.parent)
      console.log(`!!!!\n`, fileNode.relativePath)
    }
  }
