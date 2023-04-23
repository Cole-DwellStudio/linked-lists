const LinkedList = () => {
  const linkedList = { head: { value: null, next: null } };

  const append = (value) => {
    const newNode = Node();
    newNode.value = value;
    let activeNode = linkedList.head;
    while (activeNode.next != null) {
      activeNode = activeNode.next;
    }
    activeNode.next = newNode;
  };
  const prepend = (value) => {
    const newNode = Node();
    newNode.value = value;
    if (linkedList.head.next == null) {
      linkedList.head.next = newNode;
    } else {
      newNode.next = linkedList.head.next;
      linkedList.head.next = newNode;
    }
  };
  const size = () => {
    let activeNode = linkedList.head;
    let size = 0;
    while (activeNode.next != null) {
      size = size + 1;
      activeNode = activeNode.next;
    }
    return size;
  };
  const head = () => {
    return linkedList.head.next;
  };
  const tail = () => {
    if (linkedList.head.next == null) return null;
    let activeNode = linkedList.head.next;
    while (activeNode.next != null) {
      activeNode = activeNode.next;
    }
    return activeNode;
  };
  const at = (index) => {
    if (linkedList.head.next == null) return null;
    let activeNode = linkedList.head;
    for (let i = 0; i < index; i++) {
      activeNode = activeNode.next;
    }
    return activeNode;
  };
  const pop = () => {
    if (linkedList.head.next == null) return;
    let activeNode = linkedList.head;
    let previousNode = activeNode;
    while (activeNode.next != null) {
      previousNode = activeNode;
      activeNode = activeNode.next;
    }
    previousNode.next = null;
  };
  const contains = (value) => {
    if (linkedList.head.next == null) return null;
    let activeNode = linkedList.head;
    while (activeNode.next != null) {
      if (activeNode.value == value) {
        return true;
      }
      activeNode = activeNode.next;
    }
    return activeNode.value == value ? true : false;
  };
  const find = (value) => {
    if (linkedList.head.next == null) return null;
    let activeNode = linkedList.head.next;
    let index = 0;
    while (activeNode.next != null) {
      if (activeNode.value == value) {
        return index;
      }
      index++;
      activeNode = activeNode.next;
    }
    return activeNode.value == value ? index : null;
  };
  const toString = () => {
    let string = "(head)";
    let values = [];
    if (linkedList.head.next == null) return "empty";
    let activeNode = linkedList.head.next;
    while (activeNode.next != null) {
      values.push(activeNode.value);
      activeNode = activeNode.next;
    }
    values.push(activeNode.value);
    values.forEach((value) => {
      string += ` -> (${value})`;
    });

    return string;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const Node = () => {
  const value = null;
  const next = null;
  return { value, next };
};
