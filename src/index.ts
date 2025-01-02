import { Plugin, PluginServerApp } from "@signalk/server-api";

module.exports = (app: PluginServerApp): Plugin => {
  const plugin: Plugin = {
    id: "signalk-checklists",
    name: "Boat checklists",
    start: function (
      config: object,
      restart: (newConfiguration: object) => void
    ): void {
      throw new Error("Function not implemented.");
    },
    stop: function (): void {
      throw new Error("Function not implemented.");
    },
    schema: function (): object | object {
      throw new Error("Function not implemented.");
    },
  };

  return plugin;
};
