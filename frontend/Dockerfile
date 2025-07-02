# 1. ベースとなるNode.jsのイメージを指定
FROM node:22-alpine

# 2. 作業ディレクトリを作成し、そこに移動
WORKDIR /app

# 3. 最初にpackage.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 4. 依存関係のあるパッケージをインストール
RUN npm install

# 5. プロジェクトの全てのファイルをコピー
COPY . .

# 6. Next.jsアプリを起動するコマンド
CMD ["npm", "run", "dev"]