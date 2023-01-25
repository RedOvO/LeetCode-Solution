/*
 * @Author: Naluhodo
 * @Date: 2023-01-25 18:06:25
 * @LastEditTime: 2023-01-25 18:56:06
 * @LastEditors: Naluhodo
 * @Description: https://leetcode.cn/problems/lru-cache/
 */

/**
 * 解析：双向链表 + 哈希表
 * 手写双向链表，使用map作为哈希表缓存数据
 * get:
 *   - 不存在于缓存中，返回-1
 *   - 存在于缓存中，返回对应值，并将key对应的节点在双向链表中置顶
 * put:
 *   - 不存在于缓存中，新增至缓存，链表头新增该key的节点。新增后，若链表超长，则弹出链表尾，清除key对应的缓存
 *   - 存在于缓存表中，更新缓存内容，key对应的节点置顶
 * 
 * 也可以利用js/ts中MapIterator的next方法，获取到最早存储进map的键值，用于清除对应缓存数据
 */
class DoubleLinkedNode {
  prev: DoubleLinkedNode | null;
  next: DoubleLinkedNode | null;
  key: number;
  value: number;
  constructor(key: number = -1) {
    this.prev = null;
    this.next = null;
    this.key = key;
  }
}

class LRUCache {
  capacity: number;
  size: number;
  cache: Map<number, number>;
  head: DoubleLinkedNode;
  tail: DoubleLinkedNode;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = new Map();
    this.head = new DoubleLinkedNode();
    this.tail = new DoubleLinkedNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const value = this.cache.get(key);
    if (value === undefined) {
      return -1;
    } else {
      this.moveToHead(key);
      return value;
    }
  }

  put(key: number, value: number): void {
    if (!this.cache.has(key)) {
      const node = new DoubleLinkedNode(key);
      node.next = this.head.next;
      this.head.next.prev = node;
      this.head.next = node;
      node.prev = this.head;
      this.size++;
      if (this.size > this.capacity) {
        this.cache.delete(this.tail.prev.key);
        this.size = this.capacity;
        this.tail.prev.prev.next = this.tail;
        this.tail.prev = this.tail.prev.prev;
      }
    } else {
      this.moveToHead(key);
    }
    
    this.cache.set(key, value);
  }
  moveToHead(key: number) {
    let cur = this.head.next;
    while (cur) {
      if (cur.key === key) {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        cur.next = this.head.next;
        this.head.next.prev = cur;
        this.head.next = cur;
        cur.prev = this.head;
        break;
      }
      cur = cur.next;
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
