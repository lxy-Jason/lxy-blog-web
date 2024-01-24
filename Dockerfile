# 1. 构建基础镜像

FROM node:16.20.1-alpine as Base


ENV NODE_ENV=production \
  APP_PATH=/app

WORKDIR $APP_PATH

# 使用国内镜像，加速下面 apk add下载安装alpine不稳定情况
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories


# 2. 基于基础镜像安装项目依赖
FROM base AS install

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

# 3. 基于基础镜像进行最终构建
FROM base

# 拷贝 上面生成的 node_modules 文件夹复制到最终的工作目录下
COPY --from=install $APP_PATH/node_modules ./node_modules

# 拷贝当前目录下的所有文件(除了.dockerignore里排除的)，都拷贝到工作目录下
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
