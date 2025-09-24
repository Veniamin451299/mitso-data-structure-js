const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.head = null;  // начало очереди
    this.tail = null;  // конец очереди
    this.length = 0;   // размер очереди
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (!this.head) {
      // Если очередь пустая, новый элемент становится и головой и хвостом
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Добавляем в конец и обновляем хвост
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return undefined; // или можно выбросить ошибку
    }
    
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    
    // Если очередь стала пустой, обнуляем хвост
    if (!this.head) {
      this.tail = null;
    }
    
    return value;
  }

}
