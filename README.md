# 小纸条社区1.0版

#### 介绍

1. 客户端api接口服务器，包含用户注册登录、个人信息、发布动态、发布留言等核心功能。
2. 使用token身份令牌进行用户认证。
3. 严格的表单格式校验。

#### 技术栈

- node.js
- express
- mysql

#### 安装教程

1. 克隆项目

```
$ git clone https://github.com/inkicchj/paper.git
```
2.  安装依赖

```
$ cd ./paper
$ npm install
```
#### 使用说明

1.  在项目目录中打开config.js，修改为自己的配置


| 配置名 | 说明 | 
| --- | --- |
| SERVER_HOST | 服务器host地址 |
| SERVER_PORT | 服务器端口 |
| JWT_SECRET_KEY |token身份令牌加密密钥 |
| JWT_EXPIRES | token身份令牌过期时间 |
| DATA_HOST | 数据库host地址 |
| DATA_PORT | 数据库端口 |
| DATA_NAME | 数据库名 |
| DATA_USERNAME | 数据库用户名 |
| DATA_PASSWORD | 数据库用户密码 |
| SESSION_SECRET_KEY | session加密密钥，用于缓存验证码等 |
| EMAIL_USERNAME| 邮箱账户，用于邮件验证码服务 |
| EMAIL_STMP_HOST | smtp服务器，例qq邮箱为smtp.qq.com |
| EMAIL_PASSWORD | smtp授权密码 |
| EMAIL_PORT | smtp端口 |
| UNLESS_PATH | 无需身份认证的url列表 |


2.  初始化数据库

```
$ cd ./db_handler
$ node db_init.js
```
3.  启动项目

```
$ cd ../
$ node app.js
// 服务已启动-> http://127.0.0.1:8080
```

### 项目功能

1. 用户


| 功能 | 接口 | 说明 |
| --- | --- | --- |
| 获取4位图片验证码 | /api/code | 4位数字、字母混合图片验证码，用于用户注册和登录，默认5分钟内有效 |
| 获取6位邮件验证码 | /api/code1 | 6位字母邮件验证码，用于用户忘记密码时重置密码，默认5分钟内有效 |
| 注册 | /api/register | 使用邮箱地址注册，注册时系统自动分配用户昵称 |
| 登录 | /api/login | 使用邮箱地址登录 |
| 忘记密码 | /api/forget | 使用邮箱地址重置密码 |
| 退出登录 | /api/logout | 退出登录 |

### 查看文档

[api文档地址](https://www.showdoc.com.cn/1966942439940292/8929773777553140)

### 后续

1. 后台管理api
2. 消息推送系统
3. 话题板块
4. 图片、语音、视频动态
