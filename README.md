# code cleaning
    adding more components
# microservices
    A microservice is a software architectural style that structures an application as a collection of small, independent, and loosely coupled services. Each service in a microservices architecture represents a specific functional module and operates as a separate unit with its own dedicated processes. These services communicate with each other through well-defined APIs (Application Programming Interfaces) typically over HTTP or other lightweight protocols.

# Monolith Architecture
    In software development, a monolith architecture refers to a traditional and older style of designing applications where the entire application is built as a single, large, and tightly integrated unit. In a monolithic architecture, all the different components and functionalities of the application are bundled together into a single codebase, typically running in a single process and sharing the same database.

# difference between Monolith and Microservice?
    Monolith and microservice architectures is the level of coupling and the size of the building blocks. Monoliths are a single, tightly integrated unit, while microservices are a collection of small, independent services that communicate through well-defined interfaces. Microservices provide advantages in terms of scalability, flexibility, and ease of maintenance, but they also come with increased complexity and operational challenges, which need to be carefully managed.

# useEffect hook
    its normal javaScript utility function.
    It serves the purpose of managing side effects in functional components. Side effects are any code that affects something outside the scope of the component, such as fetching data from an API, updating the document title, or subscribing to events.

    Here are the main reasons why we need the useEffect hook:

    * Lifecycle Management: In class components, React provides lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount to manage side effects. With functional components, the useEffect hook effectively replaces these lifecycle methods and allows us to handle side effects in a more declarative way.

    * Executing Code After Rendering: The useEffect hook enables us to run code after the component has been rendered on the screen. It mimics the behavior of componentDidMount in class components, allowing us to perform actions like data fetching, subscriptions, or modifying the DOM.

    * Dependency Tracking: The useEffect hook takes a second argument called the dependency array. This array specifies the values from the component's state or props that the effect depends on. When any of the dependencies change, the effect is re-executed. This helps in preventing unnecessary re-renders and optimizing performance.

    * Cleaning Up Side Effects: The useEffect hook also handles cleanup operations. For example, if we subscribe to an event or set up a timer, we can use the useEffect hook to clean up those resources when the component is unmounted, ensuring that we avoid memory leaks.

    *Asynchronous Operations: useEffect allows us to perform asynchronous operations, such as making API calls, inside the effect function. This ensures that we don't block the rendering of the component while waiting for the operation to complete.

# importance of config.js file?
    It serves as a central location to store and manage configuration settings for an application or project.

    `config.js` file provides a centralized and flexible way to manage configuration settings for your application. It improves code organization, simplifies maintenance, and enhances security by separating sensitive information from your codebase.

# optimal chaining?
    * Optional chaining is a feature introduced in JavaScript (ECMAScript 2020) that provides a concise and safe way to access properties and methods of nested objects and arrays without raising an error if an intermediate value is null or undefined. It helps to avoid unnecessary checks for null or undefined values, making the code more readable and reducing the risk of encountering a "TypeError" when accessing nested properties.

    * The optional chaining syntax uses the question mark ? followed by a dot . to indicate that the property or method access should be conditional. If the value before the dot is null or undefined, the expression evaluates to undefined without throwing an error.

# shimmer UI
    *shimmier ui is nothing but the shadow of actual user interface,
    *while the application loading we can disply the shimmer ui for loding data
    *It is commonly seen in applications and websites that involve asynchronous data fetching or loading. Shimmer UI creates a subtle animation or pattern that mimics the appearance of content being loaded, giving users feedback that the app or website is actively working and preventing them from perceiving a delay as an error.

# js expression and js statement
    