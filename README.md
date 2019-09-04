# このリポジトリについて

こちらはデモ用のリポジトリです。

[Redmine](https://redmine.org/) のテーマの練習用に作成しております。
CSSについては適切でない書き方になっているため、順次修正をしていく予定です。

----------

<!-- TOC depthFrom:2 orderedList:false -->

- [Webフォントについて](#webフォントについて)
    - [配布サイト](#配布サイト)
    - [利用フォント](#利用フォント)
- [配置方法](#配置方法)
    - [テーマのみの配置](#テーマのみの配置)
    - [メッセージのカスタマイズ](#メッセージのカスタマイズ)
    - [おためし用Dockerfile](#おためし用dockerfile)
    - [お試し用のメッセージのファイル](#お試し用のメッセージのファイル)
- [Screen shot](#screen-shot)
- [Special Thanks](#special-thanks)

<!-- /TOC -->

----

## Webフォントについて

こちらのテーマでは、以下のフォントを利用させていただいております。ありがとうございます！

### 配布サイト

- あんずいろapricot×color
- 配布サイトURL: <http://www8.plala.or.jp/p_dolce/index.html>
- 作成者：京風子（Kyoko）さま

### 利用フォント

- あんずもじ
- あんずもじ等幅

## 配置方法

### テーマのみの配置

- Redmineのディレクトリ/public/themes/ 以下に展開します
- 配置後にRedmineを再起動します

参考: Redmineのディレクトリ/public/themes/ 以下

```bash
$ tree -L 1
.
├── README
├── alternate
├── classic
└── kodomo

3 directories, 1 file
```

### メッセージのカスタマイズ

このテーマ単体では、現在こども用のメニュー、ラベルには対応していません。

子ども向けにメッセージをカスタマイズする場合は、``redmine_message_customize`` プラグインなどを使うことを想定しています。

- <https://github.com/ishikawa999/redmine_message_customize.git>

### おためし用Dockerfile

このリポジトリの直下にDockerfileがありますので、テーマと``redmine_message_customize`` プラグインを併用した形での簡単な確認が可能です。

```bash
# build image
docker build -t redmine_theme_kodomo_container:latest .

# run container
docker run --rm -d -p 3000:3000/tcp redmine_theme_kodomo_container:latest
```

コンテナを起動後、アカウント:admin / パスワード: admin_kodomo_redmine でログインできます。

### お試し用のメッセージのファイル

こちらのファイルになります。

- <a href='i18n/message_ja.yml'>i18n/message_ja.yml</a>
- redmine_message_customizeの設定画面に貼り付けると更新が適用されます！
  - おためし用Dockerfileで作成したコンテナには、上記のメッセージが適用されます
  - プルリクやご自身でのカスタマイズもどうぞ！
- 基本はRedmineのリポジトリの ja.yml ファイルを置き換える形式になります
  - <https://github.com/redmine/redmine/blob/master/config/locales/ja.yml>

## Screen shot

<img src="images/screenshot.png">


## Special Thanks

- @ishikawa999
- FAR END Technologies Corporation - <https://www.farend.co.jp/>
- Redmine.org - <https://redmine.org/>
- Japanese Redmine Community - <http://redmine.jp/community/>
