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
|name|string|null: false, index true|
|email|string|null: false|
|password|string|null: false|
|again-password|string|null: false|
### Association
- has_many :groups, through:account_groups
- has_many :account_groups
- has_many :chats

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :accounts, through:account_groups
- has_many :account_groups
- has_many :chats

## chatテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|text||
|account_id|reference|null: false,foreign_key: true|
|group_id|reference|null: false,foreign_key: true|
### Association
- belongs_to :account
- belongs_to :group

## account_groupテーブル
|Column|Type|Options|
|------|----|-------|
|account_id|reference|null: false,foreign_key: true|
|group_id|reference|null: false,foreign_key: true|
### Association
- belongs_to :account
- belongs_to :group



* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
