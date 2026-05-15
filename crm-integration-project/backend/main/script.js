define(['jquery'], function () {
  'use strict';

  var API_BASE = 'https://corsa-crm.ru';
  function buildCabinetUrl(subdomain) {
    var target = API_BASE + '/dashboard';
    var qs = [];
    if (subdomain) qs.push('subdomain=' + encodeURIComponent(subdomain));
    qs.push('source=amocrm_widget');
    return target + (qs.length ? ('?' + qs.join('&')) : '');
  }

  function getSubdomain() {
    try {
      return AMOCRM.constant('account').subdomain || '';
    } catch (e) {
      return '';
    }
  }

  function buildWidgetPageHtml(subdomain) {
    var hubUrl = API_BASE + '/widget-page?embedded=1&subdomain=' + encodeURIComponent(subdomain);
    return '<div style="min-height:520px;width:100%;box-sizing:border-box;">' +
      '<iframe src="' + hubUrl + '" title="Corsa" ' +
      'style="width:100%;height:560px;border:0;border-radius:8px;background:#fff;display:block;"></iframe>' +
      '</div>';
  }

  var CustomWidget = function () {
    var self = this;

    this.callbacks = {
      settings: function () {
        return true;
      },

      init: function () {
        return true;
      },

      bind_actions: function () {
        return true;
      },

      render: function () {
        var subdomain = getSubdomain();

        var area = '';
        try {
          area = (self.system && self.system().area) || '';
        } catch (e2) {}

        var cabinetUrl = buildCabinetUrl(subdomain);
        if (area === 'settings') {
          var settingsHtml = '<div style="padding:12px 0;">' +
            '<p style="margin:0 0 10px;">' + self.i18n('widget.description') + '</p>' +
            '<p style="margin:0 0 12px;font-size:13px;color:#666;">Поддомен amoCRM: <strong>' +
            (subdomain || '-') + '</strong></p>' +
            '<a href="' + cabinetUrl + '" target="_blank" ' +
            'style="display:inline-block;padding:10px 14px;background:#2e6be6;color:#fff;border-radius:8px;text-decoration:none;font-size:13px;">' +
            self.i18n('settings.open_dashboard') +
            '</a>' +
            '</div>';
          self.render_template({
            caption: self.i18n('widget.name'),
            body: settingsHtml
          });
          return true;
        }

        var skipIframe = { advanced_settings: true, digital_pipeline: true, salesbot_designer: true };
        if (skipIframe[area]) {
          return true;
        }

        var pageHtml = buildWidgetPageHtml(subdomain);
        var widgetCode = '';
        try {
          widgetCode = self.get_settings().widget_code;
        } catch (e3) {}

        var selector = widgetCode ? ('#work-area-' + widgetCode) : '';
        if (selector && window.jQuery && window.jQuery(selector).length) {
          window.jQuery(selector).html(pageHtml);
          return true;
        }

        self.render_template({
          caption: self.i18n('widget.name'),
          body: pageHtml
        });
        return true;
      },

      contacts: {
        selected: function () {
          return true;
        }
      },

      onSave: function () {
        return true;
      },

      initMenuPage: function (params) {
        if (!params || params.location !== 'widget_page') {
          return true;
        }

        if (params.item_code && params.item_code !== 'corsa_telegram_hub') {
          return true;
        }

        var subdomain = getSubdomain();
        var widgetCode = '';
        try {
          widgetCode = self.get_settings().widget_code;
        } catch (e) {}

        var selector = widgetCode ? ('#work-area-' + widgetCode) : '';
        if (selector && window.jQuery && window.jQuery(selector).length) {
          window.jQuery(selector).html(buildWidgetPageHtml(subdomain));
          return true;
        }

        // Fallback for old menu rendering paths.
        self.render_template({
          caption: self.i18n('widget.name'),
          body: buildWidgetPageHtml(subdomain)
        });
        return true;
      }
    };

    return this;
  };

  return CustomWidget;
});
