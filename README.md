# Dev Stack — Build Your Ideal Development Stack

Dev Stack is a React + TypeScript web app that helps developers explore popular frontend, backend, database, and tooling technologies, and build their own personalized tech stack by adding and removing tools from an interactive list.

##  Description

Users can browse a curated list of technologies (React, Node.js, MongoDB, Next.js, and more), each shown with its category, difficulty level, rating, and a short description. Clicking "Add to Stack" adds the technology to a live "Your Stack" panel, where it can be removed individually or cleared all at once. The whole experience is backed by toast notifications, a loading state, and a shared gradient theme.

##  Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- Vite

##  Features

1. **Interactive Stack Builder** — Add or remove technologies from a live sidebar panel, with duplicate-add protection and instant toast feedback for every action.
2. **Fully Responsive Design** — The layout adapts smoothly from mobile (1 column) to tablet (2 columns) to desktop (3 columns), including a dedicated mobile navbar with a hamburger menu.
3. **Single-Source Gradient Theme** — One shared orange → pink → violet gradient powers the brand name, hero heading, and primary buttons, defined in a single CSS class so the whole UI can be re-themed instantly.

## 🔗 Links

- **GitHub Repository:** [Assignment-5-dev-stack-AH](https://github.com/Obviously-Start/Assignment-5-dev-stack-AH)
- **Live Site:** [assignment-5-dev-stack-ah.netlify.app](https://assignment-5-dev-stack-ah.netlify.app/)

---

##  React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes describing what the UI should look like much easier to read and write, compared to calling React.createElement() manually every time.

**2. What is the difference between props and state?**
Props are values passed into a component from its parent — the component can't change them itself. State is data a component manages internally and can update over time (for example, with useState). In short: props come from outside, state lives inside.

**3. What does the useState hook do, and where did you use it in this project?**
useState lets a component hold and update its own data, and re-renders the component whenever that data changes. In this project, it's used to track the selected stack (technologies added by the user), the fetched technologies list, and the isLoading state while data is being "loaded."

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
useEffect runs side effects — code that happens outside the normal render flow, like fetching data or setting timers. It was needed here to simulate loading the technology data after the component mounts, so a loading state can be shown before the data appears, similar to how a real API call would behave.

**5. Why does every item in a .map() list need a unique key prop?**
React uses the key to tell items apart when the list changes — adding, removing, or reordering items. Without a unique key, React can't efficiently figure out which item changed, which can cause bugs or unnecessary re-renders.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI based on some condition. One example in this project is the "Your Stack" panel — if stack.length === 0, it shows an empty-state message ("Your stack is empty."); otherwise, it renders the list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data flows from parent to child through props — the parent passes values as attributes when rendering the child component. To send data back up, the parent passes a function down as a prop (like onAdd or setStack), and the child calls that function with the data it wants to send — this is how TechnologyCard tells Technology which item was added.