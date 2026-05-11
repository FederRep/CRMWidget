(function () {
  'use strict';

  var API_BASE = 'https://corsa-crm.ru';

  function getAccountSubdomain() {
    try {
      if (window.AMOCRM && window.AMOCRM.constant && window.AMOCRM.constant('account').subdomain) {
        return window.AMOCRM.constant('account').subdomain;
      }
    } catch (e) {}
    return '';
  }

  function openCorsaCabinet(path) {
    var target = API_BASE + (path || '/dashboard');
    window.open(target, '_blank');
  }

  return this;
}).call({
  callbacks: {
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
      var self = this;
      var subdomain = '';
      try {
        subdomain = AMOCRM.constant('account').subdomain || '';
      } catch (e) {}

      var area = '';
      try {
        area = (self.system && self.system().area) || '';
      } catch (e2) {}

      if (area === 'settings') {
        self.render_template({
          caption: self.i18n('widget.name'),
          body: '<div style="padding:12px 0;">' +
            '<p style="margin:0 0 10px;">' + self.i18n('widget.description') + '</p>' +
            '<p style="margin:0 0 10px;font-size:13px;color:#666;">Поддомен: <strong>' +
            (subdomain || '—') + '</strong></p>' +
            '<a href="' + API_BASE + '/dashboard" target="_blank" style="color:#2e6be6;text-decoration:none;">' +
            self.i18n('settings.open_dashboard') +
            '</a>' +
            '</div>'
        });
        return true;
      }

      var skipIframe = { advanced_settings: true, digital_pipeline: true, salesbot_designer: true };
      if (skipIframe[area]) {
        return true;
      }

      var hubUrl = API_BASE + '/widget-page?embedded=1&subdomain=' + encodeURIComponent(subdomain);
      var iframeHtml = '<div style="min-height:520px;width:100%;box-sizing:border-box;">' +
        '<iframe src="' + hubUrl + '" title="Corsa" ' +
        'style="width:100%;height:560px;border:0;border-radius:8px;background:#fff;display:block;"></iframe>' +
        '</div>';

      self.render_template({
        caption: self.i18n('widget.name'),
        body: iframeHtml
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
    }
  }
});
