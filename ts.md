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



## vue ts 

1. Type-Safe Props
  
Generic type argument:

```ts
// generic not support required attribute
const props = defineProps<{
  limit: number,
  alertMessageOnLimit: string
}>()

```
extract generic type to interface 

```ts
interface Props {
  limit: number
  alertMessageOnLimit?: string
}

const props = defineProps<Props>()
```
Function argument:

```ts
const props = defineProps({
  limit: { type: Number, required: true },
  alertMessageOnLimit: { type: String, required: true }
})

```

2. Type-Safe Emit


```ts
<script setup lang="ts">
// 运行时
const emit = defineEmits(['change', 'update'])

// 基于类型
const emit = defineEmits<{
  (event: 'change', id: number): void
  (event: 'update', value: string): void
}>()

```
```ts
const emit = defineEmits<{ 
  (event: 'add-count', num: number): void 
  (event: 'reset-count'): void 
}>()
```