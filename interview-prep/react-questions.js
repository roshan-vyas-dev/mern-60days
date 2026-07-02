// Q1: What is React and why use it?
// React is a JavaScript library for building user interfaces
// Component based architecture - reusable pieces of UI
// Single Page Application - no full page reload when navigating
// Virtual DOM - in memory representation of real DOM
// When state changes, React compares virtual DOM with real DOM
// Only updates the parts that actually changed - faster performance
// vs Plain JS - had to manually update DOM (document.getElementById etc)
// React handles DOM updates automatically when state changes

// Q2: Props vs State?
// Props - data passed from parent to child component
// Props are immutable - child cannot change them, read only
// State - data managed inside a component
// State is mutable - can be changed using setter function (useState)
// Props example: <ProfileCard name="Roshan" age={22} />
// State example: const [count, setCount] = useState(0)
// Key difference: props come from outside, state lives inside

// Q3: What is useEffect and when to use it?
// useEffect is a React hook for side effects
// Side effects: API calls, subscriptions, timers
// Runs AFTER the component renders on screen
// Dependency array controls when it runs:
// [] empty array - runs only once on first load
// [value] - runs every time that value changes
// no array - runs after every render (avoid this)
// In my Job Tracker: useEffect fetches jobs when Dashboard loads
// useEffect(() => { fetchJobs() }, [])


// Q4: Controlled vs Uncontrolled components?
// Uncontrolled - browser manages input value, React doesn't know
// Controlled - React state controls the input value
// Controlled input has: value={state} and onChange={setState}
// Every keystroke → onChange fires → state updates → input updates
// Benefits of controlled:
// - Always know current input value
// - Easy validation before submit
// - Easy to clear after submit (setState(""))
// In my Job Tracker: all inputs are controlled components
// <input value={email} onChange={(e) => setEmail(e.target.value)} />


// Q5: What is React Router and protected routes?
// React Router is a library for navigation between pages in React
// Without it React is single page - can't have multiple URLs
// Key components: BrowserRouter, Routes, Route, Link, Navigate
// Protected route - checks if user is logged in before showing page
// If not logged in → redirect to /login
// If logged in → show the page
// How I implemented in Job Tracker:
// const isLoggedIn = !!localStorage.getItem("token")
// isLoggedIn ? <Dashboard /> : <Navigate to="/login" />