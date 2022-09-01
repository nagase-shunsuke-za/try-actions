# try-actions

[Github Actions](https://docs.github.com/ja/actions)の素振りまとめ

## GitHub Actionsとは

GitHubが提供するCI/CDプラットフォーム。ビルド、テスト、デプロイメントのパイプラインを自動化することができる。

## 構成要素

GitHub Actionsは下記の項目で構成され、これらを設定することで、Githubでの操作をトリガーとした処理を定義することができる。

- Workflow
- Event
- Job
- Actions
- Runner

### [Workflow](https://docs.github.com/ja/actions/learn-github-actions/understanding-github-actions#workflows)

- 1つ以上のジョブを実行・設定可能な自動化されたプロセス
- リポジトリ内の `.github/workflows` ディレクトリにYAMLファイルで定義する
- workflow毎に定義した処理が実行される（ `push` という同じトリガーに対して、ファイルを分けて違う処理を定義したりできる）

### [Event](https://docs.github.com/ja/actions/learn-github-actions/understanding-github-actions#events)

- リポジトリ内で発生するWorkflow実行のトリガーになる項目
- `push` や `pull_request` だったりの基本的な操作から、`pull_request_comment` だったりの細かい操作まで色々ある（[イベント一覧](https://docs.github.com/ja/actions/using-workflows/events-that-trigger-workflows)）

### [Job](https://docs.github.com/ja/actions/learn-github-actions/understanding-github-actions#jobs)

- 一連の処理（step）で構成される処理群
- Job内の各stepは、シェルスクリプトの実行 or Actionの実行で構成される
- 各stepは同じランナー上で実行される為、step間でのデータの共有が可能（stepAでbuildファイル生成 → steBでstepAで生成したファイルをテスト）
- Job間の依存関係も設定することができる（[依存ジョブを作成する](https://docs.github.com/ja/actions/using-workflows/about-workflows#creating-dependent-jobs)）

### [Actions](https://docs.github.com/ja/actions/learn-github-actions/understanding-github-actions#actions)

- リポジトリのチェックアウトや環境整備だったりの汎用的＆複雑な処理をGithub側がパッケージとしてまとめてくれているもの
- 自分で定義して使用することもできる

### [Runner](https://docs.github.com/ja/actions/learn-github-actions/understanding-github-actions#runners)

- 定義したEventが発火した際に、Workflowで定義した処理を実行するサーバー
- 1つのRunnerが1つのJobを実行する（一応Jobの処理結果を[jobs.<jobs_id>.outputs](https://github.blog/changelog/2020-04-15-github-actions-new-workflow-features/#job-outputs)で取得することはできる）

## [Secretの使用](https://docs.github.com/ja/actions/security-guides/encrypted-secrets)

- リポジトリに保存したSecret情報をWorkflowから読み込んで使用することができる
- デプロイ先のサーバー情報やAPI情報だったりを保存すると良さそう
