import {store} from "./store.js";

const TodoItem = ({id, content, activation}) => `
  <li data-id="${id}">
    <input type="checkbox" ${activation ? 'checked' : ''} />
    <span ${activation ? 'style="text-decoration: line-through;"' : ''}>
    ${content}
    </span>
  </li>
`

export const TodoList = () => `
  <ul class="todo-list">
    ${store.state.todoItems.map(TodoItem).join('')}
  </ul>
`;

//path에 따라 렌더링할 컴포넌트 선택
const Router = path => {
  if (path === '/todo-list') {
    return TodoList();
  }

  return `Hello-world`;
}

export const App = ({path}) => {
  return `
    <header>
      <a href="/">SSR Tutorial</a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/todo-list">Todo-List</a></li>
        </ul>
      </nav>
    </header>
    ${Router(path)}
    <footer>
      https://zuminternet.github.io/vue-ssr/ 참고함.
    </footer>
  `
}

