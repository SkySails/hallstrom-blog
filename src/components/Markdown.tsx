import React, { ReactElement } from "react";
import MD from "react-markdown";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import Gfm from "remark-gfm";
import MarkdownComponents from "./MDComponents";
import { Node } from "unist";

interface DirectiveNode extends Node {
  name: string;
  attributes: { [key: string]: string };
}

function reactMDRemarkDirective() {
  return (tree: Node) => {
    visit(tree, (node) => {
      if (node.type === "leafDirective") {
        node.data = {
          hName: (node as DirectiveNode).name,
          hProperties: (node as DirectiveNode).attributes,
          ...node.data,
        };
      }
    });
  };
}

export default function Markdown({ source }: { source: string }): ReactElement {
  return (
    <MD
      remarkPlugins={[Gfm, directive, reactMDRemarkDirective]}
      components={{ ...MarkdownComponents }}
    >
      {source}
    </MD>
  );
}
