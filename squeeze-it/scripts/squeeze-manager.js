import { CreatureSize } from "./constants.js";

export class SqueezeManager {

  static compareActorToTarget(actor, targetSize) {
    const actorSize = CreatureSize.fromString(game.system.id === "pf2e" ? actor?.system?.traits?.size?.value : actor?.system?.traits?.size);
    if (actorSize === null) return "unknown";

    if (actorSize < targetSize) return "smaller";
    if (actorSize === targetSize) return "equal";
    return "larger";
  }
}
