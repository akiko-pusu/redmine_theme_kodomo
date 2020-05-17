# Redmine theme for kids / Kodomo Redmine

Redmine theme for kids and children.

I created this theme inspired by [JIRA Jr.](https://www.atlassian.com/jirajr) and [various WordPress themes for kids and children](https://www.theme-junkie.com/best-wordpress-themes-for-kids-and-children/).

This theme is still experimental, but I hope to provide a more friendly Redmine with bright colors and fun fonts.

If you are interested, try creating a theme for kids and different generations!

<!-- TOC depthFrom:2 orderedList:false -->

- [Screen shot](#screen-shot)
- [Sample Movie](#sample-movie)
- [Installation](#installation)
- [docker-compose](#docker-compose)
- [for Japanese Users](#for-japanese-users)
  - [利用しているフォントについて](#利用しているフォントについて)
    - [あんずもじのご利用について](#あんずもじのご利用について)
      - [配布サイト](#配布サイト)
      - [配置手順](#配置手順)
  - [配置方法](#配置方法)
    - [テーマのみの配置](#テーマのみの配置)
    - [メッセージのカスタマイズ](#メッセージのカスタマイズ)
  - [おためし用Dockerfile](#おためし用dockerfile)
  - [お試し用のメッセージのファイル](#お試し用のメッセージのファイル)
- [Special Thanks](#special-thanks)
- [ChangeLog](#changelog)

<!-- /TOC -->

## Screen shot

![Screen shot](images/screenshot.png)

## Sample Movie

![Screen shot](images/kodomo-theme.gif)

## Installation

- Download zip file from release page
- Extract zip file, and move to public/themes/redmine_theme_kodomo at Redmine directory
- Open Redmine page, and go to Administration > Settings > Display
- Enable the redmine_theme_kodomo from Theme, and save settings

## docker-compose

You can try this theme via Docker.

- ``docker-compose up -d``
- Access to http://localhost:3000/ on web browser
- Sign in to Redmine as an administrator
- Select the theme from the administration screen.
- Stop is docker-compose stop.

---

## for Japanese Users

### 利用しているフォントについて

こちらのテーマでは、以下のフォントの利用を想定しています。
日本語に関しては、「あんずもじ」の利用を想定してのデザインになっております。
お手数をおかけしますが、各自お手元でのフォントのダウンロードをお願いいたします。

**英語**

- Google fonts - [Patrick Hand](https://fonts.google.com/specimen/Patrick+Hand)
 - Designer: Patrick Wagesreiter
 - License: [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)
 - https://fonts.google.com/specimen/Patrick+Hand

**日本語**

- Google fonts - [Kosugi Maru](https://fonts.google.com/specimen/Noto+Serif+JP) (as 'Noto Serif JP')
  - Designer: MOTOYA
  - License: [Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)
  - https://fonts.google.com/specimen/Noto+Serif+JP
- あんずもじ
  - あんずもじに関しては、各自でのダウンロードと配置をお願いします
  - フォントが組み込まれない場合は、デフォルトの日本語フォントが利用されます

#### あんずもじのご利用について

大変可愛らしい文字ですので、もしお手元でご利用の際に組み込み可能でしたら、是非ご利用してみてください！
あんずもじを利用するに当たって、以下の通りにお願いいたします。

##### 配布サイト

- あんずいろapricot×color
 - 配布サイトURL: <http://www8.plala.or.jp/p_dolce/index.html>
 - 作成者：京風子（Kyoko）さま

##### 配置手順

- 配布サイトURL: <http://www8.plala.or.jp/p_dolce/index.html> からフォントのダウンロードをお願いします
  - あんずもじ
  - あんずもじ等幅
- font というディレクトリに、以下のように配置をお願いします

```bash

$ tree font
font
├── APJapanesefont.ttf
└── APJapanesefontT.ttf

```

- データ名はapplication.css に記載と同じとなります
- 配置の上でRedmineの再起動をお願いいたします

### 配置方法

#### テーマのみの配置

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

#### メッセージのカスタマイズ

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

- [i18n/message_ja.yml]('./i18n/message_ja.yml')
- redmine_message_customizeの設定画面に貼り付けると更新が適用されます！
  - おためし用Dockerfileで作成したコンテナには、上記のメッセージが適用されます
  - プルリクやご自身でのカスタマイズもどうぞ！
- 基本はRedmineのリポジトリの ja.yml ファイルを置き換える形式になります
  - <https://github.com/redmine/redmine/blob/master/config/locales/ja.yml>

## Special Thanks

- @ishikawa999
- FAR END Technologies Corporation - <https://www.farend.co.jp/>
- Redmine.org - <https://redmine.org/>
- Japanese Redmine Community - <http://redmine.jp/community/>

## ChangeLog

- 0.0.2
  - Add great-job.png /Change border style of sidemenu (In responsive mode)
- First Release: 0.0.1
