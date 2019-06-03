// https://egghead.io/lessons/javascript-tree-data-structure-in-javascript
// Trees

// Trees are graphs without cycles
// A cicle is treeor more nodes connected in a circuitous path
// Graphs === have neighbors, nor hierarchical
// Trees  === have children, are hierarchical

function createNode(key) {
   const children = []

   return {
     key,
     children,

     addChild(childKey) {
       const childNode = createNode(childKey)
       children.push(childNode)
       return childNode
     }
   }
}

function createTree(rootKey) {
  const root = createNode(rootKey)

  return {
    root,
    print() {
      let result = ''

      function traverse(node, visitFn, depth) {
        visitFn(node, depth)

        if (node.children.length) {
          node.children.forEach(child => {
            traverse(child, visitFn, depth + 1)
          });
        }
      }

      function addKeyToResult(node, depth) {
        result +=
          result.length === 0
            ? node.key
            : `\n${' '.repeat(depth * 2)}${node.key}`
      }

      traverse(root, addKeyToResult, 1)

      return result
    }
  }
}

const dom    = createTree('html')
const head   = dom.root.addChild('head')
const body   = dom.root.addChild('body')
const title  = head.addChild('title - Tree lesson')
const header = body.addChild('header')
const main   = body.addChild('main')
const footer = body.addChild('footer')
const p1     = main.addChild('p - Learn about trees!')
const copyright = footer.addChild(`Copyrigth ${new Date().getFullYear()}`)

console.log(dom.print())