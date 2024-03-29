export function createLinkList(d: number[]) {
  var p: any, q: any;
  var head: any;
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    q = {
      val: element,
      next: null,
    };
    if (i === 0) {
      head = q;
      p = q;
    } else {
      p['next'] = q;
      p = q;
    }
  }
  return head;
}

export function linkListToArray(head: any) {
  var result = [];
  var p = head;
  while (p) {
    result.push(p.val);
    p = p.next;
  }
  return result;
}

export function createCycleLinkList(d: number[], pos: number) {
  if (d.length == 0) return null;
  var p: any, q: any, cycle: any;
  var head: any;
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    q = {
      val: element,
      next: null,
    };
    if (pos === i) cycle = q;
    if (i === 0) {
      head = q;
      p = q;
    } else {
      p['next'] = q;
      p = q;
    }
  }
  p.next = cycle;
  return head;
}
