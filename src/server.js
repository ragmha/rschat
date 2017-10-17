import Koa from 'koa';
import IO from 'koa-socket';

const app = new Koa();
const io = new IO();
const PORT = 3003;

io.attach(app);

app.use(async ctx => {
  ctx.body = 'Server is Up!';
});

let usernames = [];
let messages = [];

io.on('connection', ctx => {
  console.log('[😎‍ Server] connected');
});

io.on('disconnect', ctx => {
  const { username } = ctx.socket;
  if (username) {
    console.log(`[😭 Server] disconnected: ${username}`);
    usernames = usernames.filter(u => u !== username);
  }
});

io.on('login', (ctx, { username }) => {
  console.log(`[🔑 😁 Server] Login: ${username}`);
  usernames.push(username);
  ctx.socket.username = username;

  io.broadcast('users.login', { username });
});

io.on('logout', ctx => {
  const { username } = ctx.socket;
  if (username) {
    console.log(`[❌ 👋 Server] Logout: ${username}`);
    usernames = usernames.filter(u => u !== username);
    delete ctx.socket['username'];
  }

  io.broadcast('users.logout', { username });
});

io.on('message', (ctx, text) => {
  console.log(`[📣 Server] Message: ${text}`);
  const { username } = ctx.socket;
  const message = { id: messages.length, text, username };
  messages.push(message);

  io.broadcast('message.new', { message });
});

app.listen(PORT, () =>
  console.log(`[✅ Server]: Ready! 👉 Running on port: ${PORT}`)
);
