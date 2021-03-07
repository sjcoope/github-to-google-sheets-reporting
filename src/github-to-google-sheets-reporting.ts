function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createAddonMenu();
  menu.addItem('Create Settings Sheet', 'createSettingsSheet');
  menu.addItem('Sync Data', 'getOrganisationData');
  menu.addItem('Help', 'showHelpDialog');
  menu.addToUi();
  Logger.log('Started github-to-google-sheets-reporting');
}

function showHelpDialog() {
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutputFromFile('files/help_dialog');
  html.setTitle('Google Calendar Analyser - Help');
  ui.showSidebar(html);
}

function createSettingsSheet() {
  Logger.log('createSettingsSheet');
  // TODO - Implement
}

function getCalendarData() {
  Logger.log('getCalendarData');
  // TODO - Implement
}
