const config = {
  selectedClientId: '#{REACT_APP_AAD_CLIENT_ID}#',
  notificationHubUrl: '#{REACT_APP_NOTIFICATIONS_HUB_URL}#',
  applicationTitle: {
    title: '#{REACT_APP_APPLICATION_TITLE}#',
    subTitle: '#{REACT_APP_APPLICATION_SUB_TITLE}#',
  },
  applicationName: '#{REACT_APP_APPLICATION_NAME}#',
  basename: '#{REACT_APP_BASE_NAME}#',
  loginUrl: '#{REACT_APP_ADD_LOGIN_URL}#',
  tenantId: '#{REACT_APP_ADD_TENANT_ID}#',
  api: {
    skillsMatrix: {
      url: '#{REACT_APP_SKILLS_MATRIX_API_URL}#',
      version: '#{REACT_APP_SKILLS_MATRIX_API_VERSION}#',
    },
    notifications: {
      url: '#{REACT_APP_NOTIFICATIONS_API_URL}#',
      version: '#{REACT_APP_NOTIFICATIONS_API_VERSION}#',
    },
  },
};

sessionStorage.setItem('env', JSON.stringify(config));
