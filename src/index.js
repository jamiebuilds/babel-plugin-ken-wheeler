export default function ({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === 'word') {
          path.replaceWith(t.booleanLiteral(true));
        }

        if (path.node.name === 'nah') {
          path.replaceWith(t.booleanLiteral(false));
        }
      }
    }
  };
}
