1. Vue 响应式数据 Reactivity and 2-way binding, React data immutable ,data 1 direction flow
2. Vue is template syntax while React is JSX
3. Vue domdiff: static flag, head -head, tail -tail, longest increacing subsequence
   React dom diff: fiber tree, linked list with return and sibiling, So can stop fiber compare. Eash frame 1/60, requestIdleCallback.Fiber reconciler
4. Vue: a component is a watcher, only dom-diff inside watcher 依赖收集 automatically choose the dom diff scope
   React: render from up to down
