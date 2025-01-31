import { Activity, TurnContext } from "botbuilder";
import {
  CommandMessage,
  TeamsFxBotCommandHandler,
  TriggerPatterns,
  MessageBuilder,
} from "@microsoft/teamsfx";
import createPetsResponseCard from "../adaptiveCards/createPetsResponseCard.json";

export class CreatePetsCommandHandler implements TeamsFxBotCommandHandler {
  triggerPatterns: TriggerPatterns = "POST /pets$";

  async handleCommandReceived(
    context: TurnContext,
    message: CommandMessage,
  ): Promise<string | Partial<Activity> | void> {
    console.log("Bot received message: " + message.text);
    return MessageBuilder.attachAdaptiveCardWithoutData(createPetsResponseCard);
  }
}