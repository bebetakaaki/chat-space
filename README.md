# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## accountテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,index|
|email|string|null: false,NOT NULL|
|password|string|null: false|
|again-password|string|null: false|
### Association
- has_many :group
- has_many :chat

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|chat_member|string|null: false, foreign_key: true|
|account_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :account
- has_many :chat

## chatテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|account_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :account
- belongs_to :group

## account_groupテーブル
|Column|Type|Options|
|------|----|-------|
|account_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :account
- belongs_to :group



* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
