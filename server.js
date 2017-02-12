/**
 * @module server
 *
 * This code is part of the Trails framework.
 */
const TrailsApp = require('trails')
const app = require('./index')
const server = new TrailsApp(app)

server.start().catch(() => server.stop())
