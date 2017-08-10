# Binary Tree - "Spiral Order"

## Prompt

1. Given the root node of a Binary Tree, print out the values of each node using breadth first and switch directions each layer.

## Example input/output
### input
```
   1
  2 3
 6 5 4
7 8 9 10
```
### output
`1 2 3 4 5 6 7 8 9 10`

## Solution

[C# Solution](https://github.com/alex-wap/interview-q/blob/master/spiral/C%23/SpiralTree.cs)
```csharp
static void ZigZag(TreeNode root)
{
    Stack<TreeNode> s1 = new Stack<TreeNode>();
    s1.Push(root);
    Stack<TreeNode> s2 = new Stack<TreeNode>();
    bool goingRight = true;
    while (s1.Count > 0 || s2.Count > 0)
    {
        TreeNode curr;
        if (goingRight)
        {
            while (s1.Count > 0)
            {
                curr = s1.Pop();
                if (curr != null)
                {
                    s2.Push(curr.right);
                    s2.Push(curr.left);
                    Console.WriteLine(curr.val);
                }
            }
        }
        else
        {
            while (s2.Count > 0)
            {
                curr = s2.Pop();
                if (curr != null)
                {
                    s1.Push(curr.left);
                    s1.Push(curr.right);
                    Console.WriteLine(curr.val);
                }
            }
        }
        goingRight = !goingRight;
    }
}

static void ZigZagRecurse(Stack<TreeNode> s1, bool goingRight)
{
    Stack<TreeNode> next = new Stack<TreeNode>();
    while (s1.Count > 0)
    {
        TreeNode curr;
        curr = s1.Pop();
        if (curr != null)
        {
            next.Push(goingRight ? curr.right : curr.left);
            next.Push(goingRight ? curr.left : curr.right);
            Console.WriteLine(curr.val);
        }
    }
    if (next.Count > 0)
    {
        ZigZagRecurse(next, !goingRight);
    }
}
```

## Notes

* binary tree vs binary search tree
