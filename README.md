# Move My Car

现代化的挪车通知系统，包含后台管理、车主控制台、二维码分享页，以及多种第三方通知渠道。项目基于 Node.js + SQLite + React 构建，并提供完整的 Docker 化部署方案，适合在私有云或本地环境中快速上线。

## 功能亮点
- 🔐 **账号体系**：支持普通用户与管理员角色，JWT 登录，默认管理员通过种子脚本创建，后续可在后台创建更多账号。
- 🛰️ **车主控制台**：车主可添加多辆车、设置电话与通知方式、生成分享链接/二维码。
- 📱 **扫码提醒页**：扫码即可发送挪车提醒或一键获取车主电话，内置速率限制保护。
- 🧾 **二维码输出**：车主控制台支持一键生成车辆分享链接的二维码，方便直接打印张贴。
- 🧭 **后台控制台**：管理员查看所有车辆，复制/重置链接或删除异常数据。
- 🪩 **现代 UI**：玻璃拟态 + 霓虹渐变风格，响应式布局，移动端也可舒适使用。
- 📦 **Docker 一键部署**：`docker-compose` 同时拉起数据库、API 与前端，无需手工安装依赖。

## 目录结构
```
move-my-car/
├── backend/          # Express + Prisma API 源码
├── frontend/         # Vite + React 前端界面
├── data/             # SQLite 数据文件（默认 move-my-car.db）
├── docker-compose.yml
└── README.md
```

## 快速开始（Docker）
1. **准备环境变量（单一 `.env`）**
   ```bash
   cp .env.example .env
   mkdir -p data
   ```
   `.env` 放在仓库根目录即可同时被 API 和前端使用，可修改其中的 `JWT_SECRET`、`ADMIN_USERNAME`、`ADMIN_PASSWORD` 等字段确保安全。

2. **启动服务**
   ```bash
   docker compose up --build -d
   ```

3. **初始化数据库**（首次部署）
   ```bash
   docker compose run --rm api npx prisma migrate deploy
   docker compose run --rm api npm run prisma:seed
   ```
完成后即可使用 `.env` 中配置的管理员账号登录 `http://localhost:5200/admin`（默认 `admin / admin`）。

4. **调试 / 查看日志**
   ```bash
   docker compose logs -f api
   docker compose logs -f web
   ```

## 本地开发
在仓库根目录准备好 `.env`（`cp .env.example .env`），后端会自动读取根目录和 `backend/.env`（如有）并以本地文件覆盖根目录配置，前端也会从根目录 `.env` 读取 `VITE_` 变量。

### Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```
API 默认运行在 `http://localhost:4000`，使用 `DATABASE_URL=file:./data/move-my-car.db` 即可将数据存放在 `./data` 目录。

- **车主登录（`http://IP:5200/login`）**：账号由管理员在后台创建，车主登录后即可在仪表盘中添加车辆、配置电话与通知方式（Bark、WxPusher、飞书、企业微信、钉钉、OneBot 等），并可开关「消息通知」「电话通知」。每台车都会生成 `http://IP:5200/vehicle/XXXXXX` 的分享链接，并支持直接导出二维码贴在车上。
- **访客扫码（`/vehicle/:shareCode`）**：现场人员可自定义留言并发送通知，点击“拨打电话”会直接拉起设备拨号。系统默认 300 秒内最多推送 5 次，超过会返回「我正在赶来的路上，请稍等片刻~~~」。
- **管理员后台（`/admin`）**：可批量查看车辆、复制或重置分享链接、删除异常数据，并且可以创建/删除车主账号（含初始密码）。

### 通知方式格式参考

| 渠道 | `notifyConfig` 示例 |
| --- | --- |
| Bark | `token|sound|url|level|volume|badge|call`；`url` 为 Bark 服务地址（只需写到域名，系统会自动补上 `/push`），其余参数见 [官方教程](https://bark.day.app/#/tutorial)，`level` 支持 critical/active/timeSensitive/passive，`volume` 0-10，`call` 传 `1` 时循环播放 |
| WxPusher | `AT_xxxxxx|UID_xxxxxx` |
| 飞书机器人 | `token`（Webhook 链接末尾） |
| 企业微信机器人 | `token`（Webhook 链接末尾） |
| 钉钉机器人 | `token`（Webhook 链接末尾） |
| OneBot / NapCat / Lagrange | `http://host:port/send_private_msg|access_token|接收人ID` |

### Frontend
```bash
cd frontend
npm install
npm run dev
```
前端开发服务器地址为 `http://localhost:5173`，并通过 `VITE_API_URL` 调用 API。

## 主要技术栈
- **API**：Node.js 20、Express、Prisma ORM、SQLite、JWT、Zod 校验
- **UI**：React 18、Vite、React Router、Axios、自定义玻璃拟态设计
- **部署**：Docker、docker-compose、Nginx（前端静态资源，监听 5200）

## 后续扩展建议
- 初次登录默认管理员账号（admin / admin）后，请立即在后台修改密码，确保安全。
- 接入短信/语音等通知方式，真正做到“自动通知车主”。
- 新增 Webhook / IFTTT 连接，联动门禁或广播系统。
- 引入多组织/多停车场配置，支持更复杂的权限模型。

> 数据默认会生成在 `./data/move-my-car.db`，请自行做好备份或挂载到持久化存储。

祝你部署顺利 🚗💨
