
# nextJs

## 创建项目

```bash
npx create-next-app@latest
```
根据选择创建项目

运行
```bash
npm run dev
```

## 使用

### 后端接口
1、创建文件 `pages/api/hello.ts`
2、代码如下
```ts
import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(req: NextApiRequest, resp: NextApiResponse) {
    resp.setHeader("Content-Type", "application/json");
    resp.status(200).json({message: "it's ok"})
}
```
3、重新运行，页面访问 `http://localhost:3000/api/hello`



### 前端页面
1、创建文件 `app/hello/page.tsx`
2、代码如下
```tsx
export default function Hello() {
    return <div>Hello Page ~~~</div>
}
```
3、页面访问 `http://localhost:3000/hello`