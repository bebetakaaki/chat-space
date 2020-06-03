# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## new_accountテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|again-password|string|null: false|
### Association
- has_many :group_create
- has_many :chat

## group_createテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false|
|chat_member|integer|null: false, foreign_key: true|
|new_account_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :new_account
- has_many :chat

## chatテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|new_account_id|integer|null: false, foreign_key: true|
|group_create_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :new_account
- belongs_to :group_create


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
