const api = require("@opentelemetry/api");
const { diag, DiagConsoleLogger, DiagLogLevel } = require("@opentelemetry/api");
const { CompositePropagator, AsyncHooksContextManager } = require("@opentelemetry/core");

// Set up diagnostics
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// Set global propagator
api.propagation.setGlobalPropagator(new CompositePropagator());

// Set up and enable async context manager
const contextManager = new AsyncHooksContextManager();
contextManager.enable();
api.context.setGlobalContextManager(contextManager);
