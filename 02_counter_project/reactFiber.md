# React Fiber

**React Fiber** is an entirely new version of React's core rendering algorithm.  
Its main purpose is to make applications feel faster and more responsive, especially during **animations, gestures, and complex updates**.  

The key innovation is **incremental rendering**, which means React can break down UI updates into small, manageable pieces. This allows React to **pause and resume work** to avoid blocking the browser, ensuring smooth performance.

---

## Key Concepts

### 1. Reconciliation vs. Rendering
- **Reconciliation (Thinking):** React compares the old component tree with the new one to figure out what needs to change.  
- **Rendering (Doing):** React applies those changes to the DOM.  
- **Fiber improves reconciliation** by making it incremental and efficient.

---

### 2. Scheduling
- Older React: all updates had **equal priority** and had to finish immediately → caused performance issues.  
- React Fiber: uses a smarter scheduling system with **prioritized tasks**.  
  - **High Priority:** User interactions (clicks, animations) → handled immediately.  
  - **Low Priority:** Background tasks (data fetching, off-screen rendering) → handled during idle time.

---

### 3. The Fiber as a Unit of Work
A **Fiber** is a plain JavaScript object that represents a **unit of work**.  

- Similar to a **stack frame**, but React controls it directly.  
- Benefits:
  - Pause, resume, or cancel work.
  - Assign priorities to tasks.
  - Reuse fibers when there are no changes.

---

## Anatomy of a Fiber

A **Fiber object** contains all information React needs to process a component.

Important properties:

- **`type` and `key`:** Identify the component and help decide if a Fiber can be reused.  
- **`child`, `sibling`, `return`:** Pointers that create a tree structure.  
  - `child` → first child  
  - `sibling` → next child in a list  
  - `return` → parent Fiber  
- **`pendingProps` and `memoizedProps`:**  
  - `pendingProps` = new props  
  - `memoizedProps` = previous props  
  - If they match → skip work (optimization).  
- **`pendingWorkPriority`:** Scheduler priority value.  
- **`alternate`:** Enables **double buffering**.  
  - Each component has:
    - `current` Fiber → visible on screen  
    - `work-in-progress` Fiber → background updates  
  - Once updates are ready, React **swaps** them instantly.  
- **`output`:** Final result of the Fiber (e.g., a DOM node) passed to the renderer.

---

## Summary

React Fiber gives React:
- **Incremental rendering** for smoother UIs.  
- **Advanced scheduling** for prioritizing important updates.  
- **Custom virtual stack (Fibers)** that allows pausing, resuming, and reusing work.  
- **Efficient double buffering** for quick UI updates.  

🚀 The result: apps feel more **responsive and interactive**, even with heavy UI updates.
