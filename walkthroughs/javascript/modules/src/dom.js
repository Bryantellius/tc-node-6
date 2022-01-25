// Default Export
class DOM {
  updateTextById(id, txt) {
    document.querySelector(`#${id}`).textContent = txt;
  }
  addClassNameById(id, className) {
    document.querySelector(`#${id}`).classList.add(className);
  }
  removeClassNameById(id, className) {
    document.querySelector(`#${id}`).classList.remove(className);
  }
}

export default new DOM();
