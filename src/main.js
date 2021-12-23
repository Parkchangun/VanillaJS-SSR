import {TodoList} from "./component.js";
import {store} from "./store.js";

export const render = () => {
  //Component Render
  const $app = document.querySelector('#app .todo-list');
  // 원작자 코드
  // const { pathname: path } = location;
  // $app.innerHTML = App({ path });
  //
  // if (path === '/todo-list') {

  if($app !== null) {
    $app.innerHTML = TodoList();

    //Add Event
    $app.querySelectorAll('li').forEach(el => {
      el.addEventListener('click', () => {
        const {id} = el.dataset;
        store.toggleActivation(store.state.todoItems.findIndex(value => value.id === Number(id)));
        render();
      })
    })
  }

}

render();
