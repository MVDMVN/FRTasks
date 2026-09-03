/**
 * Условие — в task.txt
 *
 * @param {Array<{ id: string, title: string, done: boolean }>} todos
 * @param {string} id
 * @returns {Array<{ id: string, title: string, done: boolean }>}
 */
export function toggleTodo(todos, id) {
  const newArr = todos.map(item => {
    if (item.id === id) {
      return { ...item, done: !item.done }
    } else {
      return item
    }
  })

  return newArr
}
