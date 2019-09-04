# frozen_string_literal: true

# Set Admin's password
ADMIN_PASS = 'admin_kodomo_redmine'
LOGIN = 'admin'.encode('UTF-8')
user = User.find_by_login(LOGIN)
user.update!(password: ADMIN_PASS, must_change_passwd: false)

# Load message file
ja_kodomo_file = "#{Rails.root}/public/themes/redmine_theme_kodomo/i18n/message_ja.yml"
custom_message_setting = CustomMessageSetting.find_or_default
custom_message_setting.update_with_custom_messages_yaml(File.read(ja_kodomo_file))

# Add banner message
banner_description = <<~DESC
  こどもれっどまいんのサンプルです。パスワードは #{ADMIN_PASS} です。
  (Redmine trunk: #{Redmine::VERSION::REVISION || Redmine::VERSION})
DESC

message = {
  enable: 'true',
  type: 'info',
  display_part: 'both',
  banner_description: banner_description
}

banner_setting = Setting.find_or_default('plugin_redmine_banner')
banner_setting.value = message.stringify_keys
banner_setting.save

# Apply theme
Setting.ui_theme = 'redmine_theme_kodomo'
Setting.app_title = 'こどもれっどまいん'

