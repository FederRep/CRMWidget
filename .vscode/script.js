define(['jquery', 'underscore', 'twigjs'], function ($, _, Twig) {
  var CustomWidget = function () {
    var self = this;
    
    // Переводы
    this.translations = {
      ru: {
        'widget.name': 'Corsa Messenger Integrator',
        'widget.description': 'Интеграция Telegram, VK и других мессенджеров с amoCRM',
        'widget.button.connect_telegram': 'Подключить Telegram',
        'widget.button.connect_vk': 'Подключить ВКонтакте',
        'widget.status.connected': 'Подключено',
        'widget.status.disconnected': 'Не подключено',
        'widget.section.messenger': 'Мессенджеры',
        'widget.section.settings': 'Настройки',
        'widget.section.analytics': 'Аналитика',
        'widget.section.bulk_send': 'Массовая рассылка',
        'widget.bulk_send.title': 'Создать рассылку',
        'widget.bulk_send.select_platform': 'Выберите платформу',
        'widget.bulk_send.telegram': 'Telegram',
        'widget.bulk_send.vk': 'VK',
        'widget.bulk_send.select_template': 'Выберите шаблон (или введите вручную)',
        'widget.bulk_send.message_text': 'Текст сообщения',
        'widget.bulk_send.recipients_list': 'Получатели (ID контактов)',
        'widget.bulk_send.recipients_placeholder': '12345,67890,...',
        'widget.bulk_send.send_button': 'Отправить',
        'widget.bulk_send.progress_sent': 'Отправлено:',
        'widget.bulk_send.progress_failed': 'Ошибок:',
        'widget.bulk_send.progress_status': 'Статус:',
        'widget.bulk_send.completed': '✅ Рассылка завершена!',
        'widget.bulk_send.loading_templates': 'Загрузка шаблонов...',
        'widget.bulk_send.error_fill_fields': 'Заполните текст сообщения и получателей',
        'widget.bulk_send.error_sending': 'Ошибка при отправке:',
        'widget.bulk_send.success_sending': '✅ Рассылка запущена!',
        'widget.short_description': 'Интеграция Telegram, VK и других мессенджеров с amoCRM',
        'widget.tour_description': 'Подключите мессенджеры для получения уведомлений и управления диалогами из amoCRM',
        'settings.login': 'Логин пользователя',
        'settings.enable_notifications': 'Включить уведомления',
        'settings.notification_channels': 'Каналы уведомлений',
        'settings.channel_telegram': 'Telegram',
        'settings.channel_vk': 'ВКонтакте',
        'dp.message': 'Сообщение для интеграции',
        'advanced.title': 'Расширенные настройки',
        'salesbot.handler_name': 'Обработчик Salesbot',
        'salesbot.button_title': 'Название кнопки',
        'salesbot.button_title_default_value': 'Кнопка по умолчанию',
        'salesbot.button_caption': 'Подпись кнопки',
        'salesbot.button_caption_default_value': 'Подпись по умолчанию',
        'salesbot.text': 'Текст',
        'salesbot.number': 'Число',
        'salesbot.url': 'URL'
      },
      en: {
        'widget.name': 'Corsa Messenger Integrator',
        'widget.description': 'Integration of Telegram, VK and other messengers with amoCRM',
        'widget.button.connect_telegram': 'Connect Telegram',
        'widget.button.connect_vk': 'Connect VK',
        'widget.status.connected': 'Connected',
        'widget.status.disconnected': 'Disconnected',
        'widget.section.messenger': 'Messengers',
        'widget.section.settings': 'Settings',
        'widget.section.analytics': 'Analytics',
        'widget.section.bulk_send': 'Mass Messaging',
        'widget.bulk_send.title': 'Create Bulk Send',
        'widget.bulk_send.select_platform': 'Select platform',
        'widget.bulk_send.telegram': 'Telegram',
        'widget.bulk_send.vk': 'VK',
        'widget.bulk_send.select_template': 'Select template (or enter manually)',
        'widget.bulk_send.message_text': 'Message text',
        'widget.bulk_send.recipients_list': 'Recipients (Contact IDs)',
        'widget.bulk_send.recipients_placeholder': '12345,67890,...',
        'widget.bulk_send.send_button': 'Send',
        'widget.bulk_send.progress_sent': 'Sent:',
        'widget.bulk_send.progress_failed': 'Failed:',
        'widget.bulk_send.progress_status': 'Status:',
        'widget.bulk_send.completed': '✅ Bulk send completed!',
        'widget.bulk_send.loading_templates': 'Loading templates...',
        'widget.bulk_send.error_fill_fields': 'Fill message text and recipients',
        'widget.bulk_send.error_sending': 'Error sending:',
        'widget.bulk_send.success_sending': '✅ Bulk send started!',
        'widget.short_description': 'Integration of Telegram, VK and other messengers with amoCRM',
        'widget.tour_description': 'Connect messengers to receive notifications and manage dialogs from amoCRM',
        'settings.login': 'User login',
        'settings.enable_notifications': 'Enable notifications',
        'settings.notification_channels': 'Notification channels',
        'settings.channel_telegram': 'Telegram',
        'settings.channel_vk': 'VK',
        'dp.message': 'Integration message',
        'advanced.title': 'Advanced settings',
        'salesbot.handler_name': 'Salesbot handler',
        'salesbot.button_title': 'Button title',
        'salesbot.button_title_default_value': 'Default button',
        'salesbot.button_caption': 'Button caption',
        'salesbot.button_caption_default_value': 'Default caption',
        'salesbot.text': 'Text',
        'salesbot.number': 'Number',
        'salesbot.url': 'URL'
      }
    };

    // Коллбэки виджета
    this.callbacks = {
      render: _.bind(function (params) {
        var container = params.container;
        var data = params.data || {};

        var template = Twig.twig({
          data: `
            <div class="corsa-widget">
              <div class="widget-header">
                <h3>{{ __('widget.name') }}</h3>
                <p class="widget-description">{{ __('widget.description') }}</p>
              </div>
              
              <div class="widget-section">
                <h4>{{ __('widget.section.messenger') }}</h4>
                <div class="messenger-buttons">
                  <button class="btn btn-telegram" onclick="connectTelegram()">
                    ✈️ {{ __('widget.button.connect_telegram') }}
                  </button>
                  <button class="btn btn-vk" onclick="connectVK()">
                    💬 {{ __('widget.button.connect_vk') }}
                  </button>
                </div>
                
                <div class="connection-status">
                  {% if telegram_connected %}
                    <span class="status connected">{{ __('widget.status.connected') }}</span>
                  {% else %}
                    <span class="status disconnected">{{ __('widget.status.disconnected') }}</span>
                  {% endif %}
                </div>
              </div>
              
              <!-- НОВЫЙ РАЗДЕЛ: Массовая рассылка -->
              <div class="widget-section">
                <h4>{{ __('widget.section.bulk_send') }}</h4>
                <button class="btn btn-send-bulk" onclick="showBulkSendModal()">
                  🚀 {{ __('widget.bulk_send.title') }}
                </button>
              </div>
              
              <div class="widget-section">
                <h4>{{ __('widget.section.settings') }}</h4>
                <p>Настройки интеграции...</p>
              </div>
              
              <div class="widget-section">
                <h4>{{ __('widget.section.analytics') }}</h4>
                <p>Статистика сообщений...</p>
              </div>
            </div>
            
            <!-- Модальное окно для рассылки -->
            <div id="bulk-send-modal" class="modal" style="display:none;">
              <div class="modal-content">
                <span class="close" onclick="closeBulkSendModal()">&times;</span>
                <h3>{{ __('widget.bulk_send.title') }}</h3>
                
                <label>{{ __('widget.bulk_send.select_platform') }}:</label>
                <select id="platform-select">
                  <option value="telegram">{{ __('widget.bulk_send.telegram') }}</option>
                  <option value="vk">{{ __('widget.bulk_send.vk') }}</option>
                </select>
                
                <label>{{ __('widget.bulk_send.select_template') }}:</label>
                <select id="template-select" onchange="loadTemplate()">
                  <option value="">{{ __('widget.bulk_send.select_template') }}</option>
                  <!-- Будет заполнено динамически -->
                </select>
                
                <label>{{ __('widget.bulk_send.message_text') }}:</label>
                <textarea id="message-text" placeholder="{{ __('widget.bulk_send.message_text') }}"></textarea>
                
                <label>{{ __('widget.bulk_send.recipients_list') }}:</label>
                <textarea id="recipients-list" placeholder="{{ __('widget.bulk_send.recipients_placeholder') }}"></textarea>
                
                <button onclick="sendBulkMessages()">{{ __('widget.bulk_send.send_button') }}</button>
                
                <div id="bulk-progress" style="margin-top: 15px;"></div>
              </div>
            </div>
            
            <style>
              .corsa-widget { padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; }
              .widget-header h3 { color: #0044FF; margin-bottom: 10px; }
              .widget-description { color: #666; margin-bottom: 20px; }
              .widget-section { margin-bottom: 25px; }
              .widget-section h4 { color: #333; margin-bottom: 15px; border-bottom: 2px solid #eee; padding-bottom: 5px; }
              .messenger-buttons { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px; }
              .btn { padding: 12px 24px; border: none; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
              .btn-telegram { background: linear-gradient(135deg, #24A1DE 0%, #1B7FAD 100%); color: white; }
              .btn-vk { background: linear-gradient(135deg, #0077FF 0%, #0055CC 100%); color: white; }
              .btn-send-bulk { background: linear-gradient(135deg, #FF6B6B 0%, #FF5252 100%); color: white; }
              .btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
              .connection-status { padding: 10px; border-radius: 8px; }
              .status.connected { background: #e8f5e9; color: #2e7d32; border: 1px solid #4caf50; }
              .status.disconnected { background: #ffebee; color: #c62828; border: 1px dashed #f44336; }
              
              /* Modal Styles */
              .modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
              }
              
              .modal-content {
                background-color: #fefefe;
                margin: 5% auto;
                padding: 20px;
                border: none;
                border-radius: 12px;
                width: 90%;
                max-width: 600px;
                position: relative;
              }
              
              .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
              }
              
              .close:hover {
                color: black;
              }
              
              .modal-content textarea,
              .modal-content select {
                width: 100%;
                padding: 10px;
                margin: 10px 0;
                border: 1px solid #ccc;
                border-radius: 4px;
              }
            </style>
          `
        });

        var templateData = {
          telegram_connected: data.telegram_connected || false,
          vk_connected: data.vk_connected || false
        };
        var html = template.render(templateData);
        $(container).html(html);
        this.bindActions();
      }, this),

      init: _.bind(function (params) {
        this.loadConnections();
        return true;
      }, this),

      bind_actions: _.bind(function () {
        window.connectTelegram = function() {
          const width = 600;
          const height = 700;
          const left = window.screen.width / 2 - width / 2;
          const top = window.screen.height / 2 - height / 2;
          
          window.open(
            'https://corsa-crm.ru/api/auth/telegram',
            'Telegram Auth',
            `width=${width},height=${height},left=${left},top=${top}`
          );
        };

        window.connectVK = function() {
          const width = 600;
          const height = 700;
          const left = window.screen.width / 2 - width / 2;
          const top = window.screen.height / 2 - height / 2;
          
          window.open(
            'https://corsa-crm.ru/api/auth/vk',
            'VK Auth',
            `width=${width},height=${height},left=${left},top=${top}`
          );
        };

        // --- ФУНКЦИИ ДЛЯ МАССОВОЙ РАССЫЛКИ ---
        window.showBulkSendModal = async function() {
          document.getElementById('bulk-send-modal').style.display = 'block';
          
          // Загрузить шаблоны
          try {
            const response = await fetch('https://corsa-crm.ru/api/templates');
            const data = await response.json();
            
            const select = document.getElementById('template-select');
            select.innerHTML = '<option value="">{{ __("widget.bulk_send.select_template") }}</option>';
            data.templates.forEach(t => {
              const opt = document.createElement('option');
              opt.value = t;
              opt.textContent = t;
              select.appendChild(opt);
            });
          } catch (err) {
            console.error('Failed to load templates:', err);
          }
        };

        window.closeBulkSendModal = function() {
          document.getElementById('bulk-send-modal').style.display = 'none';
        };

        window.loadTemplate = async function() {
          const id = document.getElementById('template-select').value;
          if (!id) return;
          
          try {
            const response = await fetch(`https://corsa-crm.ru/api/templates/${id}`);
            const data = await response.json();
            document.getElementById('message-text').value = data.text;
          } catch (err) {
            console.error('Failed to load template:', err);
          }
        };

        window.sendBulkMessages = async function() {
          const platform = document.getElementById('platform-select').value;
          const templateId = document.getElementById('template-select').value;
          const message = document.getElementById('message-text').value;
          const recipientsInput = document.getElementById('recipients-list').value;
          
          const recipients = recipientsInput.split(',').map(r => r.trim()).filter(Boolean).map(contactId => ({ contactId }));

          if (!message.trim() || recipients.length === 0) {
            alert('{{ __("widget.bulk_send.error_fill_fields") }}');
            return;
          }

          try {
            const response = await fetch('https://corsa-crm.ru/api/messages/send-bulk', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                platform,
                message: templateId ? undefined : message,
                templateId: templateId || undefined,
                recipients,
                delay: 2000 // 2 секунды между отправками
              })
            });

            const result = await response.json();
            
            if (result.success) {
              alert('{{ __("widget.bulk_send.success_sending") }}');
              // Отслеживание прогресса
              trackSendingProgress(result.jobId);
            } else {
              alert('{{ __("widget.bulk_send.error_sending") }} ' + result.error);
            }
          } catch (err) {
            alert('{{ __("widget.bulk_send.error_sending") }} ' + err.message);
          }
        };

        window.trackSendingProgress = async function(jobId) {
          const progressDiv = document.getElementById('bulk-progress');
          
          while (true) {
            try {
              const response = await fetch(`https://corsa-crm.ru/api/messages/send-bulk/${jobId}`);
              const data = await response.json();
              
              progressDiv.innerHTML = `
                <p>{{ __("widget.bulk_send.progress_sent") }} ${data.sent} / ${data.total}<br>
                {{ __("widget.bulk_send.progress_failed") }} ${data.failed}<br>
                {{ __("widget.bulk_send.progress_status") }} ${data.status}</p>
              `;
              
              if (data.status === 'completed') {
                progressDiv.innerHTML += '<p>{{ __("widget.bulk_send.completed") }}</p>';
                break;
              }
              
              await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (err) {
              console.error('Progress tracking error:', err);
              break;
            }
          }
        };

        return true;
      }, this),

      settings: _.bind(function (params) {
        var settingsContainer = params.container;
        
        var settingsTemplate = Twig.twig({
          data: `
            <div class="corsa-settings">
              <h3>Настройки интеграции</h3>
              <div class="setting-group">
                <label>
                  <input type="checkbox" name="enable_telegram_notifications" checked>
                  Включить уведомления в Telegram
                </label>
              </div>
              <div class="setting-group">
                <label>
                  <input type="checkbox" name="enable_vk_notifications">
                  Включить уведомления в VK
                </label>
              </div>
            </div>
            
            <style>
              .corsa-settings { padding: 20px; }
              .setting-group { margin-bottom: 15px; }
              .setting-group label { display: flex; align-items: center; gap: 10px; }
            </style>
          `
        });

        $(settingsContainer).html(settingsTemplate.render({}));
        
        return true;
      }, this),

      onSave: _.bind(function (params) {
        return true;
      }, this),

      destroy: function () {
      },

      contacts: {
        selected: function (params) {
        }
      },

      leads: {
        selected: function (params) {
        }
      },

      tasks: {
        selected: function (params) {
        }
      }
    };

    // Вспомогательные методы
    this.loadConnections = function() {
      $.ajax({
        url: 'https://corsa-crm.ru/api/subscription/status',
        method: 'GET',
        data: {
          subdomain: self.getSubdomain()
        },
        success: function(response) {
        },
        error: function(xhr, status, error) {
        }
      });
    };

    this.getSubdomain = function() {
      const match = window.location.href.match(/https?:\/\/([^.]+)\.amocrm\.ru/);
      return match ? match[1] : null;
    };

    this.__ = function(key, lang = 'ru') {
      return self.translations[lang][key] || key;
    };
  };

  return CustomWidget;
});