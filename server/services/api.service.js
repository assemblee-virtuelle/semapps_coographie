const ApiGatewayService = require('moleculer-web');
const { OidcConnector } = require('@semapps/connector');

module.exports = {
  mixins: [ApiGatewayService],
  settings: {
    server: true,
    cors: {
      origin: '*',
      methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'HEAD', 'OPTIONS'],
      exposedHeaders: '*'
    }
  },
  dependencies: ['ldp', 'sparqlEndpoint', 'webid'],
  async started() {
    this.connector = new OidcConnector({
      issuer: process.env.SEMAPPS_OIDC_ISSUER,
      clientId: process.env.SEMAPPS_OIDC_CLIENT_ID,
      clientSecret: process.env.SEMAPPS_OIDC_CLIENT_SECRET,
      publicKey: process.env.SEMAPPS_OIDC_PUBLIC_KEY,
      redirectUri: process.env.SEMAPPS_HOME_URL + 'auth',
      selectProfileData: authData => ({
        email: authData.email,
        name: authData.given_name,
        familyName: authData.family_name
      }),
      findOrCreateProfile: async profileData => {
        return await this.broker.call('webid.create', profileData);
      }
    });

    await this.connector.initialize();

    [
      this.connector.getRoute(),
      ...(await this.broker.call('ldp.getApiRoutes')),
      ...(await this.broker.call('webid.getApiRoutes')),
      ...(await this.broker.call('sparqlEndpoint.getApiRoutes'))
    ].forEach(route => this.addRoute(route));
  },
  methods: {
    authenticate(ctx, route, req, res) {
      return this.connector.authenticate(ctx, route, req, res);
    },
    authorize(ctx, route, req, res) {
      return this.connector.authorize(ctx, route, req, res);
    }
  }
};
