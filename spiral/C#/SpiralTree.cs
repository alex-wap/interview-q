using System;
using System.Collections.Generic;

namespace SpiralTree
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Iterative:");
            ZigZag(TreeNode.zigZagTree);

            Console.WriteLine("Recursive:");
            var stack = new Stack<TreeNode>();
            stack.Push(TreeNode.zigZagTree);
            ZigZagRecurse(stack, true);
        }

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
    }

    class TreeNode
    {
        public static TreeNode zigZagTree = new TreeNode()
            {
                val = 1,
                left = new TreeNode()
                {
                    val = 2,
                    left = new TreeNode()
                    {
                        val = 7
                    },
                    right = new TreeNode()
                    {
                        val = 6
                    }
                },
                right = new TreeNode()
                {
                    val = 3,
                    left = new TreeNode()
                    {
                        val = 5
                    },
                    right = new TreeNode()
                    {
                        val = 4
                    }
                }
            };

        public int val;
        public TreeNode left;
        public TreeNode right;
    }
}
