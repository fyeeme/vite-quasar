## 方法参数

参数和返回值

```ts
function calculateGrade(course1: number, course2: number) : string {
    return (course1 + course2) > 70 ? 'A' : 'B';
}
```

## 接口定义

```ts
interface User {
  name: string;
  id: number;
}
const user: User = {}
```

## 组合类型
指定多个类型
```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```

## 基本类型

type	Predicate
string	typeof s === "string"
number	typeof n === "number"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)

