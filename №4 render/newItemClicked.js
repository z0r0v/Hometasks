function newItemClicked() {
  for (let i = 0; i < items.length; i++) {
    items[i].selected = false;
  }
  let itemSpan = this.parentElement;
  const itemElement = itemSpan.parentElement;
  const itemitemSpanArray = Array.from(itemElement.document.querySelector('span.item-text'));
  let index = itemitemSpanArray.indexOf(itemSpan);
  items[index].selected = true;
  if (items[index].selected === true) {
    htmlElements.item.classList.add('selected');
    htmlElements.body.style.backgroundColor = items[index].bgColor;
    htmlElements.heloWorldText.style.color = items[index].Color;
  }
  render();
}
